const urls = [
	"https://www.mi.com/in/",
	"https://account.xiaomi.com/fe/service/login/password?_locale=en_IN",
	"https://store.mi.com/in/item/3200600003&skupanel=1"
];

const creds = {
	username: "baviskarhemu@gmail.com",
	pass: "Hemu-123"
};

const selectors = {
	login: {
		email: "#rc-tabs-0-panel-login > form > div.mi-form__content > div.ant-row > div.ant-col.ant-col-xs-24 > div > div > div > div > input",
		pass: "#rc-tabs-0-panel-login > form > div.mi-form__content > div.mi-password-field.mi-text-field.mi-text-field--with-label.mi-form-field.mi-form-field--fullwidth.mi-form-field--bordered > div > div.mi-form-field__control > div > input",
		submit: "#rc-tabs-0-panel-login > form > div.mi-form__content > button"
	},
	battery: {
		price_label: "#J_goodsInfoBlock > dd.goods-info-head-price.clearfix.J_headPrice > b",
		notify_btn: "#goodsDetailBtnBox > a.goods-over-btn.btn.btn-large.btn-orange.J_openNotifyPop.J_click_xmot",
		add_to_cart_wrap: "#goodsDetailBtnBox",
		add_to_cart_btn: "#goodsDetailBtnBox > a.goods-add-cart-btn.btn.btn-large.btn-orange.J_click_xmot.J_addCart"
	}
}

exports.urls = urls;
exports.creds = creds;
exports.selectors = selectors;