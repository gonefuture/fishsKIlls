package cn.zhku.fishery.mybatis.mapper;

import cn.zhku.fishery.mybatis.entity.AdminPrivilege;
import cn.zhku.fishery.mybatis.entity.AdminPrivilegeExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface AdminPrivilegeMapper {
    long countByExample(AdminPrivilegeExample example);

    int deleteByExample(AdminPrivilegeExample example);

    int insert(AdminPrivilege record);

    int insertSelective(AdminPrivilege record);

    List<AdminPrivilege> selectByExample(AdminPrivilegeExample example);

    int updateByExampleSelective(@Param("record") AdminPrivilege record, @Param("example") AdminPrivilegeExample example);

    int updateByExample(@Param("record") AdminPrivilege record, @Param("example") AdminPrivilegeExample example);
}