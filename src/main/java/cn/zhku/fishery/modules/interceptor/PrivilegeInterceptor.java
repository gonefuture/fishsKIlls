package cn.zhku.fishery.modules.interceptor;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authz.Permission;
import org.apache.shiro.subject.Subject;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @author 钱伟健 gonefutre
 * @date 2017/7/25 21:28.
 * @E-mail gonefuture@qq.com
 */
public class PrivilegeInterceptor implements HandlerInterceptor {
    private Subject subject = SecurityUtils.getSubject();

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        //获取Url
        String method = request.getParameter("method");
        if(subject.isPermitted(method)) {
            return true;
        } else
            return  false;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {

    }
}
