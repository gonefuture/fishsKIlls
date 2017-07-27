package cn.zhku.fishery.modules.question.controlller;

import cn.zhku.fishery.modules.question.service.QuestionService;
import cn.zhku.fishery.mybatis.entity.Message;
import cn.zhku.fishery.mybatis.entity.Question;
import cn.zhku.fishery.mybatis.entity.QuestionWithBLOBs;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * @author 钱伟健 gonefutre
 * @date: 2017/6/22 21:34.
 * @E-mail: gonefuture@qq.com
 */

@Controller
//
@RequestMapping("/back/QuestionServlet")
public class QuestionController {
    @Autowired
    QuestionService questionService;

    @RequestMapping(params="method=insert")
    @ResponseBody
    public Message insert(QuestionWithBLOBs questionWithBLOBs) {
        return questionService.insert(questionWithBLOBs);
    }


    @RequestMapping(params="method=deletequestion")
    @ResponseBody
    public Message deletequestion(Question question) {
        return questionService.deletequestion(question);
    }





    @RequestMapping(params="method=validate")
    @ResponseBody
    public Message validate(QuestionWithBLOBs questionWithBLOBs) {
        return questionService.validate(questionWithBLOBs);
    }


    @RequestMapping(params="method=answer")
    @ResponseBody
    public Message answer(QuestionWithBLOBs questionWithBLOBs) {
        return questionService.answer(questionWithBLOBs);
    }

    @RequestMapping(params="method=answerpre")
    @ResponseBody
    public Question answerpre(QuestionWithBLOBs questionWithBLOBs) {
        return questionService.answerpre(questionWithBLOBs);

    }

    @RequestMapping(value="/back/QuestionServlet",params="method=questionlist")
    @ResponseBody
    public List<Question> questionList(int cp ,int ls) {
        return questionService.questionList(cp,ls);
    }

}
