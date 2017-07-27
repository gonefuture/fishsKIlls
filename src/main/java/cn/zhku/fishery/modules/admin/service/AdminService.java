package cn.zhku.fishery.modules.admin.service;

import cn.zhku.fishery.mybatis.entity.*;
import cn.zhku.fishery.mybatis.mapper.AdminMapper;
import cn.zhku.fishery.mybatis.mapper.AdminPrivilegeMapper;
import cn.zhku.fishery.utils.interfaceUtils.IBaseService;
import com.alibaba.fastjson.support.odps.udf.CodecCheck;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * @author 钱伟健 gonefutre
 * @date: 18:16.
 * @E-mail:gonefuture@qq.com
 */
@Service
public class AdminService implements IBaseService<Admin> {
    @SuppressWarnings("SpringJavaAutowiringInspection")
    @Autowired
    AdminMapper adminMapper;

    @SuppressWarnings("SpringJavaAutowiringInspection")
    @Autowired
    AdminPrivilegeMapper adminPrivilegeMapper;

    public boolean loge(Admin form) {
        Admin admin = findByAdminid(form.getAdminid());
        if(admin!= null && form.getPassword() == admin.getPassword())
            return true;
        else
            return false;
    }

    public Admin findByAdminid(String adminid) {
        return adminMapper.selectByPrimaryKey(adminid);
    }

    public Set<Privilege> findPids(String adminid) {
        List<AdminPrivilege> adminPrivilegeList = findAdminPrivilege(adminid);
        Set<Privilege> privilegeSet = new HashSet<Privilege>();
        for(AdminPrivilege adminPrivilege: adminPrivilegeList) {
            Privilege privilege = new Privilege();
            privilege.setPid(adminPrivilege.getPid());
            privilegeSet.add(privilege);
        }
        return privilegeSet;
    }

    /**
     * 查找用户权限关系
     * @param adminid
     * @return
     */
    public List<AdminPrivilege> findAdminPrivilege(String adminid) {
        AdminPrivilegeExample adminPrivilegeExample = new AdminPrivilegeExample();
        adminPrivilegeExample.or().andAdminidEqualTo(adminid);
        return adminPrivilegeMapper.selectByExample(adminPrivilegeExample);
    }

    public int add(Admin entity) throws Exception {
        return 0;
    }

    public int update(Admin entity) throws Exception {
        return 0;
    }

    public int delete(Admin entity) throws Exception {
        return 0;
    }

    public Admin get(String id) throws Exception {
        return null;
    }

    public Admin get(Admin entity) throws Exception {
        return null;
    }

    public List<Admin> findList(Admin entity) throws Exception {

        //adminMapper.selectByExample()
        return null;
    }
    public  List<Admin> findAllList() throws Exception {
        return adminMapper.selectByExample(new AdminExample());
    }

}
