package cn.zhku.fishery.filter;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.web.filter.authz.AuthorizationFilter;
import org.testng.annotations.Test;

import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

/**
 * @author 钱伟健 gonefutre
 * @date 2017/7/25 22:32.
 * @E-mail gonefuture@qq.com
 */
public class PermissionFilter extends AuthorizationFilter {
    @Override
    protected boolean isAccessAllowed(ServletRequest request, ServletResponse response, Object mappedValue) throws Exception {

        Subject subject = SecurityUtils.getSubject();String method = request.getParameter("method");

        if(subject.isPermitted(method)) {
            return true;
        } else
            return  false;

    }

}
