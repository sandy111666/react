var app = require('koa')();
var router = require('koa-router')();

// router.get('/', function *(next) {
//     this.body = 'hello koa !'
// });

// router.get('/api', function *(next) {
//     this.body = 'test data'
// });

// 首页 —�?广告（超值特惠）
var homeAdData = require('./home/ad.js')
router.get('/api/homead', function *(next) {
    console.log('首页 —�?广告（超值特惠）')

    this.body = homeAdData
});

// 首页 —�?推荐列表（猜你喜欢）
var homeListData = require('./home/list.js')
router.get('/api/homelist/:city/:page', function *(next) {
    console.log('首页 —�?推荐列表（猜你喜欢）')

    // 参数
    const params = this.params
    const paramsCity = params.city
    const paramsPage = params.page

 //   console.log('当前城市�? + paramsCity)
//    console.log('当前页数�? + paramsPage)

    this.body = homeListData
});

// 搜索结果�?- 搜索结果 - 三个参数
var searchListData = require('./search/list.js')
router.get('/api/search/:page/:city/:category/:keyword', function *(next) {
    console.log('搜索结果�?- 搜索结果')

    // 参数
    const params = this.params
    const paramsPage = params.page
    const paramsCity = params.city
    const paramsCategory = params.category
    const paramsKeyword = params.keyword

 //   console.log('当前页数�? + paramsPage)
 //   console.log('当前城市�? + paramsCity)
 //   console.log('当前类别�? + paramsCategory)
 //   console.log('关键字：' + paramsKeyword)

    this.body = searchListData
})
// 搜索结果�?- 搜索结果 - 两个参数
router.get('/api/search/:page/:city/:category', function *(next) {
    console.log('搜索结果�?- 搜索结果')

    // 参数
    const params = this.params
    const paramsPage = params.page
    const paramsCity = params.city
    const paramsCategory = params.category

//    console.log('当前页数�? + paramsPage)
//    console.log('当前�?市：' + paramsCity)
 //   console.log('当前类别�? + paramsCategory)

    this.body = searchListData
})

// 详情�?- 商户信息
const detailInfo = require('./detail/info.js')
router.get('/api/detail/info/:id', function *(next) {
    console.log('详情�?- 商户信息')

    const params = this.params
    const id = params.id

    console.log('商户id: ' + id)

    this.body = detailInfo
})
// 详情�?- 用户评论
const detailComment = require('./detail/comment.js')
router.get('/api/detail/comment/:page/:id', function *(next) {
    console.log('详情�?- 用户点评')

    const params = this.params
    const page = params.page
    const id = params.id

 //   console.log('商户id: ' + id)
  //  console.log('当前页数: ' + page)

    this.body = detailComment
})

// 订单列表
const orderList = require('./orderlist/orderList.js')
router.get('/api/orderlist/:username', function *(next) {
    console.log('订单列表')

    const params = this.params
    const username = params.username
 //   console.log('用户名：' + username)

    this.body = orderList
})

// 提交评论
router.post('/api/submitComment', function *(next) {
    console.log('提交评论')

    // 获取参数

    this.body = {
        errno: 0,
        msg: 'ok'
    }
})

// 开始服务并生成路由
app.use(router.routes())
   .use(router.allowedMethods());
app.listen(3000);
