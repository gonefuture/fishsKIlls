package cn.zhku.fishery.shiro;

import cn.zhku.fishery.modules.admin.service.AdminService;
import cn.zhku.fishery.mybatis.entity.Admin;
import cn.zhku.fishery.mybatis.entity.Privilege;
import org.apache.shiro.authc.*;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.apache.shiro.util.ByteSource;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.HashSet;
import java.util.Set;

/**
 * @author 钱伟健 gonefutre
 * @date 2017/7/17 11:23.
 * @E-mail gonefuture@qq.com
 */
public class AdminRealm extends AuthorizingRealm {
    // 用户对应的角色信息与权限信息都保存在数据库中，通过UserService获取数据
    @Autowired
    private AdminService adminService ;
    /**
     * 提供用户信息返回权限信息
     */
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
        String adminid = (String) principals.getPrimaryPrincipal();
        SimpleAuthorizationInfo authorizationInfo = new SimpleAuthorizationInfo();
        // 根据用户名查询当前用户拥有的权限
        Set<Privilege> privilegeSet = adminService.findPids(adminid);
        Set<String> pidSet = new HashSet<String>();
        for (Privilege privilege : privilegeSet) {
            pidSet.add(privilege.getPid());
        }
//        // 将角色名称提供给info
//        authorizationInfo.set.setRoles(pidSet);
//        // 根据用户名查询当前用户权限
//        Set<Permission> permissions = adminService.findPermissions(adminid);
//        Set<String> permissionNames = new HashSet<String>();
//        for (Permission permission : permissions) {
//            permissionNames.add(permission.getPermission());
//        }
        // 将权限名称提供给info
        authorizationInfo.setStringPermissions(pidSet);

        return authorizationInfo;
    }

    /**
     * 提供账户信息返回认证信息
     */
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
        String adminid = (String) token.getPrincipal();
        Admin admin = adminService.findByAdminid(adminid);
        if (admin == null) {
            // 用户名不存在抛出异常
            throw new UnknownAccountException();
        }
        if (admin.getAdminflag() == 404) {
            // 用户被管理员锁定抛出异常
            throw new LockedAccountException();
        }

        return new SimpleAuthenticationInfo(admin.getAdminid(),
                admin.getPassword(), getName());

    }

    public AdminService getAdminService() {
        return adminService;
    }

    public void setAdminService(AdminService adminService) {
        this.adminService = adminService;
    }
}