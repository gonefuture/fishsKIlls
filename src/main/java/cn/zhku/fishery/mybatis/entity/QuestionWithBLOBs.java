package cn.zhku.fishery.mybatis.entity;

public class QuestionWithBLOBs extends Question {
    private String details;

    private String answer;

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details == null ? null : details.trim();
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer == null ? null : answer.trim();
    }
}