package cn.zhku.fishery.modules.news.entity;

import cn.zhku.fishery.mybatis.entity.News;

/**
 *@author 钱伟健  E-mail:gonefuture@qq.com
 *@description TODO 
 *@time 2017年7月3日 上午10:35:50 
 *@version 1.0 
**/
public class NewsMsg extends News {
	private int status;    //状态码，1代表成功，2代表失败
	private String verbose;//操作的提示信息
	/**
	 * @return the status
	 */
	public int getStatus() {
		return status;
	}
	/**
	 * @param status the status to set
	 */
	public void setStatus(int status) {
		this.status = status;
	}
	/**
	 * @return the verbose
	 */
	public String getVerbose() {
		return verbose;
	}
	/**
	 * @param verbose the verbose to set
	 */
	public void setVerbose(String verbose) {
		this.verbose = verbose;
	}
	

	public NewsMsg(int status, String verbose) {
		this.status = status;
		this.verbose = verbose;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "NewsMsg [status=" + status + ", verbose=" + verbose + "]";
	}
	
	
}
