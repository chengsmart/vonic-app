/**
 * Created by chengshuai on 2017/5/23.
 * Email:chengshuai.tj@gmail.com
 * Author:Smart
 * Description:
 */

const base = 'http://info-restful.shuzibencao.com/';
const restful = base + 'ag-info-restful-api/api/v1/';
const rest = {
    login:'http://10.6.0.46:8083/cdm-bms/login',
    getSkuList: restful + 'webSupply/list?page=1&limit=40'
}

export default {
    base,
    rest
};