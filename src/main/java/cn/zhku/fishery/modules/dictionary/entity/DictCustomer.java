package cn.zhku.fishery.modules.dictionary.entity;

import cn.zhku.fishery.mybatis.entity.Dictionary;

import java.util.ArrayList;
import java.util.List;

/** 
 *@author 钱伟健  E-mail:gonefuture@qq.com
 *@description TODO 
 *@time 2017年7月9日 上午1:23:30 
 *@version 1.0 
**/
public class DictCustomer extends Dictionary{
	private String pname;
	private List<Dictionary> subDict;
	private List<Dictionary> SiblingDict;

	public String getPname() {
		return pname;
	}

	public void setPname(String pname) {
		this.pname = pname;
	}

	public List<Dictionary> getSubDict() {
		return subDict;
	}

	public void setSubDict(List<Dictionary> subDict) {
		this.subDict = subDict;
	}

	public List<Dictionary> getSiblingDict() {
		return SiblingDict;
	}

	public void setSiblingDict(List<Dictionary> siblingDict) {
		SiblingDict = siblingDict;
	}
}
