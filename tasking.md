电商平台web
tasking0:显示
    header（暂时不用）/body/footer（暂时不用）
    body中包括商品列表
    商品列表分页显示
    商品条目（img/名称/单价/商家/删除button/修改button）

tasking1:增
    tasking1-1:由后端增加的商品数据
    tasking1-2:由前端增加的商品数据 一个添加button后弹出表单，表单进行验证后将商品信息添加

tasking2:删
    每一个商品条目后面有删除的button，点击后删除该条商品的信息

tasking3:改
    每一个商品条目后有修改的button，点击后弹出表单进行修改，表单验证后显示出修改后的商品信息

tasking：查
    商品列表上方加入search部分，通过商品名称进行检索

预计使用的zorro-antd：
（1）AutoComplete/input ----用于搜索关键字
（2）Form               ----用于新增/修改商品条目
（3）Model/Popconfirm   ----用于删除条目时弹出对话框
（4）Notifacation       ----用于修改成功后弹出提示
（5）Backtop            ----用于返回页面最上
（6）Pagination         ----用于条目分页
（7）Table              ----表格+分页