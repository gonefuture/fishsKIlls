package cn.zhku.fishery.mybatis.entity;

import java.util.ArrayList;
import java.util.List;

public class MarketExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public MarketExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andMarketidIsNull() {
            addCriterion("marketid is null");
            return (Criteria) this;
        }

        public Criteria andMarketidIsNotNull() {
            addCriterion("marketid is not null");
            return (Criteria) this;
        }

        public Criteria andMarketidEqualTo(Integer value) {
            addCriterion("marketid =", value, "marketid");
            return (Criteria) this;
        }

        public Criteria andMarketidNotEqualTo(Integer value) {
            addCriterion("marketid <>", value, "marketid");
            return (Criteria) this;
        }

        public Criteria andMarketidGreaterThan(Integer value) {
            addCriterion("marketid >", value, "marketid");
            return (Criteria) this;
        }

        public Criteria andMarketidGreaterThanOrEqualTo(Integer value) {
            addCriterion("marketid >=", value, "marketid");
            return (Criteria) this;
        }

        public Criteria andMarketidLessThan(Integer value) {
            addCriterion("marketid <", value, "marketid");
            return (Criteria) this;
        }

        public Criteria andMarketidLessThanOrEqualTo(Integer value) {
            addCriterion("marketid <=", value, "marketid");
            return (Criteria) this;
        }

        public Criteria andMarketidIn(List<Integer> values) {
            addCriterion("marketid in", values, "marketid");
            return (Criteria) this;
        }

        public Criteria andMarketidNotIn(List<Integer> values) {
            addCriterion("marketid not in", values, "marketid");
            return (Criteria) this;
        }

        public Criteria andMarketidBetween(Integer value1, Integer value2) {
            addCriterion("marketid between", value1, value2, "marketid");
            return (Criteria) this;
        }

        public Criteria andMarketidNotBetween(Integer value1, Integer value2) {
            addCriterion("marketid not between", value1, value2, "marketid");
            return (Criteria) this;
        }

        public Criteria andMarketnameIsNull() {
            addCriterion("marketname is null");
            return (Criteria) this;
        }

        public Criteria andMarketnameIsNotNull() {
            addCriterion("marketname is not null");
            return (Criteria) this;
        }

        public Criteria andMarketnameEqualTo(String value) {
            addCriterion("marketname =", value, "marketname");
            return (Criteria) this;
        }

        public Criteria andMarketnameNotEqualTo(String value) {
            addCriterion("marketname <>", value, "marketname");
            return (Criteria) this;
        }

        public Criteria andMarketnameGreaterThan(String value) {
            addCriterion("marketname >", value, "marketname");
            return (Criteria) this;
        }

        public Criteria andMarketnameGreaterThanOrEqualTo(String value) {
            addCriterion("marketname >=", value, "marketname");
            return (Criteria) this;
        }

        public Criteria andMarketnameLessThan(String value) {
            addCriterion("marketname <", value, "marketname");
            return (Criteria) this;
        }

        public Criteria andMarketnameLessThanOrEqualTo(String value) {
            addCriterion("marketname <=", value, "marketname");
            return (Criteria) this;
        }

        public Criteria andMarketnameLike(String value) {
            addCriterion("marketname like", value, "marketname");
            return (Criteria) this;
        }

        public Criteria andMarketnameNotLike(String value) {
            addCriterion("marketname not like", value, "marketname");
            return (Criteria) this;
        }

        public Criteria andMarketnameIn(List<String> values) {
            addCriterion("marketname in", values, "marketname");
            return (Criteria) this;
        }

        public Criteria andMarketnameNotIn(List<String> values) {
            addCriterion("marketname not in", values, "marketname");
            return (Criteria) this;
        }

        public Criteria andMarketnameBetween(String value1, String value2) {
            addCriterion("marketname between", value1, value2, "marketname");
            return (Criteria) this;
        }

        public Criteria andMarketnameNotBetween(String value1, String value2) {
            addCriterion("marketname not between", value1, value2, "marketname");
            return (Criteria) this;
        }

        public Criteria andProvinceIsNull() {
            addCriterion("province is null");
            return (Criteria) this;
        }

        public Criteria andProvinceIsNotNull() {
            addCriterion("province is not null");
            return (Criteria) this;
        }

        public Criteria andProvinceEqualTo(String value) {
            addCriterion("province =", value, "province");
            return (Criteria) this;
        }

        public Criteria andProvinceNotEqualTo(String value) {
            addCriterion("province <>", value, "province");
            return (Criteria) this;
        }

        public Criteria andProvinceGreaterThan(String value) {
            addCriterion("province >", value, "province");
            return (Criteria) this;
        }

        public Criteria andProvinceGreaterThanOrEqualTo(String value) {
            addCriterion("province >=", value, "province");
            return (Criteria) this;
        }

        public Criteria andProvinceLessThan(String value) {
            addCriterion("province <", value, "province");
            return (Criteria) this;
        }

        public Criteria andProvinceLessThanOrEqualTo(String value) {
            addCriterion("province <=", value, "province");
            return (Criteria) this;
        }

        public Criteria andProvinceLike(String value) {
            addCriterion("province like", value, "province");
            return (Criteria) this;
        }

        public Criteria andProvinceNotLike(String value) {
            addCriterion("province not like", value, "province");
            return (Criteria) this;
        }

        public Criteria andProvinceIn(List<String> values) {
            addCriterion("province in", values, "province");
            return (Criteria) this;
        }

        public Criteria andProvinceNotIn(List<String> values) {
            addCriterion("province not in", values, "province");
            return (Criteria) this;
        }

        public Criteria andProvinceBetween(String value1, String value2) {
            addCriterion("province between", value1, value2, "province");
            return (Criteria) this;
        }

        public Criteria andProvinceNotBetween(String value1, String value2) {
            addCriterion("province not between", value1, value2, "province");
            return (Criteria) this;
        }

        public Criteria andDictionaryidIsNull() {
            addCriterion("dictionaryid is null");
            return (Criteria) this;
        }

        public Criteria andDictionaryidIsNotNull() {
            addCriterion("dictionaryid is not null");
            return (Criteria) this;
        }

        public Criteria andDictionaryidEqualTo(Integer value) {
            addCriterion("dictionaryid =", value, "dictionaryid");
            return (Criteria) this;
        }

        public Criteria andDictionaryidNotEqualTo(Integer value) {
            addCriterion("dictionaryid <>", value, "dictionaryid");
            return (Criteria) this;
        }

        public Criteria andDictionaryidGreaterThan(Integer value) {
            addCriterion("dictionaryid >", value, "dictionaryid");
            return (Criteria) this;
        }

        public Criteria andDictionaryidGreaterThanOrEqualTo(Integer value) {
            addCriterion("dictionaryid >=", value, "dictionaryid");
            return (Criteria) this;
        }

        public Criteria andDictionaryidLessThan(Integer value) {
            addCriterion("dictionaryid <", value, "dictionaryid");
            return (Criteria) this;
        }

        public Criteria andDictionaryidLessThanOrEqualTo(Integer value) {
            addCriterion("dictionaryid <=", value, "dictionaryid");
            return (Criteria) this;
        }

        public Criteria andDictionaryidIn(List<Integer> values) {
            addCriterion("dictionaryid in", values, "dictionaryid");
            return (Criteria) this;
        }

        public Criteria andDictionaryidNotIn(List<Integer> values) {
            addCriterion("dictionaryid not in", values, "dictionaryid");
            return (Criteria) this;
        }

        public Criteria andDictionaryidBetween(Integer value1, Integer value2) {
            addCriterion("dictionaryid between", value1, value2, "dictionaryid");
            return (Criteria) this;
        }

        public Criteria andDictionaryidNotBetween(Integer value1, Integer value2) {
            addCriterion("dictionaryid not between", value1, value2, "dictionaryid");
            return (Criteria) this;
        }

        public Criteria andAdminidIsNull() {
            addCriterion("adminid is null");
            return (Criteria) this;
        }

        public Criteria andAdminidIsNotNull() {
            addCriterion("adminid is not null");
            return (Criteria) this;
        }

        public Criteria andAdminidEqualTo(String value) {
            addCriterion("adminid =", value, "adminid");
            return (Criteria) this;
        }

        public Criteria andAdminidNotEqualTo(String value) {
            addCriterion("adminid <>", value, "adminid");
            return (Criteria) this;
        }

        public Criteria andAdminidGreaterThan(String value) {
            addCriterion("adminid >", value, "adminid");
            return (Criteria) this;
        }

        public Criteria andAdminidGreaterThanOrEqualTo(String value) {
            addCriterion("adminid >=", value, "adminid");
            return (Criteria) this;
        }

        public Criteria andAdminidLessThan(String value) {
            addCriterion("adminid <", value, "adminid");
            return (Criteria) this;
        }

        public Criteria andAdminidLessThanOrEqualTo(String value) {
            addCriterion("adminid <=", value, "adminid");
            return (Criteria) this;
        }

        public Criteria andAdminidLike(String value) {
            addCriterion("adminid like", value, "adminid");
            return (Criteria) this;
        }

        public Criteria andAdminidNotLike(String value) {
            addCriterion("adminid not like", value, "adminid");
            return (Criteria) this;
        }

        public Criteria andAdminidIn(List<String> values) {
            addCriterion("adminid in", values, "adminid");
            return (Criteria) this;
        }

        public Criteria andAdminidNotIn(List<String> values) {
            addCriterion("adminid not in", values, "adminid");
            return (Criteria) this;
        }

        public Criteria andAdminidBetween(String value1, String value2) {
            addCriterion("adminid between", value1, value2, "adminid");
            return (Criteria) this;
        }

        public Criteria andAdminidNotBetween(String value1, String value2) {
            addCriterion("adminid not between", value1, value2, "adminid");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}