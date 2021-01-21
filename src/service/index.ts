import request from '@/service/request'
// 获取分类接口
export function getArticleList (data: any) {
  return request({
    url: '/article/getList',
    method: 'get',
    params: data
  })
}

