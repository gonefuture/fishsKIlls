package cn.zhku.fishery.mybatis.mapper;


import cn.zhku.fishery.mybatis.entity.Market;
import cn.zhku.fishery.mybatis.entity.MarketExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

public interface MarketMapper {


    @Select("select * from Market limit #{cp},#{ls} ")
    List<Market> MarketList(@Param("cp") int cp, @Param("ls") int ls);


    long countByExample(MarketExample example);

    int deleteByExample(MarketExample example);

    int deleteByPrimaryKey(Integer marketid);

    int insert(Market record);

    int insertSelective(Market record);

    List<Market> selectByExample(MarketExample example);

    Market selectByPrimaryKey(Integer marketid);

    int updateByExampleSelective(@Param("record") Market record, @Param("example") MarketExample example);

    int updateByExample(@Param("record") Market record, @Param("example") MarketExample example);

    int updateByPrimaryKeySelective(Market record);

    int updateByPrimaryKey(Market record);



}