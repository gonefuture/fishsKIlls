package cn.zhku.fishery.mybatis.mapper;

import cn.zhku.fishery.mybatis.entity.Question;
import cn.zhku.fishery.mybatis.entity.QuestionExample;
import cn.zhku.fishery.mybatis.entity.QuestionWithBLOBs;

import java.util.ArrayList;
import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

public interface QuestionMapper {
    @Select("select * from question limit #{cp},#{ls}")
    List<Question> questionList(int cp, int ls);

    long countByExample(QuestionExample example);

    int deleteByExample(QuestionExample example);

    int deleteByPrimaryKey(Integer questionid);

    int insert(QuestionWithBLOBs record);

    int insertSelective(QuestionWithBLOBs record);

    List<QuestionWithBLOBs> selectByExampleWithBLOBs(QuestionExample example);

    List<Question> selectByExample(QuestionExample example);

    QuestionWithBLOBs selectByPrimaryKey(Integer questionid);

    int updateByExampleSelective(@Param("record") QuestionWithBLOBs record, @Param("example") QuestionExample example);

    int updateByExampleWithBLOBs(@Param("record") QuestionWithBLOBs record, @Param("example") QuestionExample example);

    int updateByExample(@Param("record") Question record, @Param("example") QuestionExample example);

    int updateByPrimaryKeySelective(QuestionWithBLOBs record);

    int updateByPrimaryKeyWithBLOBs(QuestionWithBLOBs record);

    int updateByPrimaryKey(Question record);

}