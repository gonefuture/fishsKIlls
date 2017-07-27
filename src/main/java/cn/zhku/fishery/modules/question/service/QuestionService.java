package cn.zhku.fishery.modules.question.service;

import cn.zhku.fishery.mybatis.entity.Message;
import cn.zhku.fishery.mybatis.entity.Question;
import cn.zhku.fishery.mybatis.entity.QuestionWithBLOBs;
import cn.zhku.fishery.mybatis.mapper.QuestionMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author 钱伟健 gonefutre
 * @date 2017/7/14 22:13.
 * @E-mail gonefuture@qq.com
 */
@Service
public class QuestionService {
    @SuppressWarnings("SpringJavaAutowiringInspection")
    @Autowired
    QuestionMapper questionMapper;

    public List<Question> questionList(int cp, int ls) {
        return questionMapper.questionList(cp,ls);
    }

    public Message insert(QuestionWithBLOBs questionWithBLOBs) {
        if(questionMapper.insert(questionWithBLOBs) != 0)
            return new Message(1,"提问成功");
        else
            return new Message(2,"提问失败");
    }

    public Message deletequestion(Question question) {
        if(questionMapper.deleteByPrimaryKey(question.getQuestionid()) != 0)
            return new Message(1,"删除问题成功");
        else
            return new Message(2,"删除问题失败");
    }



    public Message validate(QuestionWithBLOBs questionWithBLOBs) {
        if (questionMapper.updateByPrimaryKeyWithBLOBs(questionWithBLOBs) != 0)
            return new Message(1, "问题审核成功");
        else
            return new Message(2, "问题审核失败");

    }

    public Message answer(QuestionWithBLOBs questionWithBLOBs) {
        if (questionMapper.updateByPrimaryKeyWithBLOBs(questionWithBLOBs) != 0)
            return new Message(1, "回答问题成功");
        else
            return new Message(2, "回答问题失败");

    }


    public Question answerpre(Question question) {
        return questionMapper.selectByPrimaryKey(question.getQuestionid());
    }


}


