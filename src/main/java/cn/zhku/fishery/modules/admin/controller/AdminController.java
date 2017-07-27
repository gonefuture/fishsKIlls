package cn.zhku.fishery.modules.admin.controller;

import cn.zhku.fishery.modules.admin.service.AdminService;
import cn.zhku.fishery.mybatis.entity.Admin;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.ExcessiveAttemptsException;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

/**
 * @author 钱伟健 gonefutre
 * @date: 2017/6/22 18:30.
 * @E-mail:gonefuture@qq.com
 */

@Controller

public class AdminController {
    @Autowired
    AdminService adminService;

    @RequestMapping(value ="admin/login")
    public ModelAndView login( Admin form) {
        UsernamePasswordToken token = new UsernamePasswordToken(form.getAdminid(), form.getPassword());
        Subject subject = SecurityUtils.getSubject();
        token.setRememberMe(true);
        try {
            subject.login(token);
        } catch (IncorrectCredentialsException ice) {
            // 捕获密码错误异常
            ModelAndView mv = new ModelAndView("redirect:error.html");
            mv.addObject("message", "password error!");
            return mv;
        } catch (UnknownAccountException uae) {
            // 捕获未知用户名异常
            ModelAndView mv = new ModelAndView("redirect:error.html");
            mv.addObject("message", "username error!");
            return mv;
        } catch (ExcessiveAttemptsException eae) {
            // 捕获错误登录过多的异常
            ModelAndView mv = new ModelAndView("redirect:error.html");
            mv.addObject("message", "times error");
            return mv;
        }
        Admin admin = adminService.findByAdminid(form.getAdminid());
        subject.getSession().setAttribute("admin", admin);
        return new ModelAndView("redirect:/managerPage/manager_money.html");
    }

    @RequestMapping(value = "back/Admin",params ="method=showAdmin")
    @ResponseBody
    public List<Admin> showAdmin() throws Exception {
        return adminService.findAllList();
    }

    @RequestMapping("admin/register")
    public String  register(Model model, HttpServletRequest request) {
               /*
         * 校验验证码
         * 1. 获取表单中的验证码
         * 2. 获取图片上的文字
         */
        //String verifyCode = request.getParameter("verifyCode");
        // VerifyCodeServlet会把真正的验证码保存到sessin
        String vcode = (String) request.getSession().getAttribute("vCode");
        //System.out.println(verifyCode.equalsIgnoreCase(vcode));
        System.out.println(vcode);
        model.addAttribute("status","1");
        return "admin/register";
    }

}
