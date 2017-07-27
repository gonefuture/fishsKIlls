package cn.zhku.fishery.mybatis.entity;

/**
 * @author 钱伟健 gonefutre
 * @date 2017/7/15 20:10.
 * @E-mail gonefuture@qq.com
 */
public class Message  {
    private int status;    //状态码，1代表成功，2代表失败
    private String verbose;//操作的提示信息
    public String message;



    public Message() {
        super();
    }

    public Message(int status,String message){
        this.status = status;
        this.message = message;
        this.verbose =message;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getVerbose() {
        return verbose;
    }

    public void setVerbose(String verbose) {
        this.verbose = verbose;
    }


    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return "Message{" +
                "status=" + status +
                ", verbose='" + verbose + '\'' +
                ", message='" + message + '\'' +
                '}';
    }
}
