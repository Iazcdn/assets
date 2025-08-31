* Cropper.js v0.5.6
 * https://github.com/fengyuanchen/cropperjs
 *
 * Copyright (c) 2015-2016 Fengyuan Chen
 * Released under the MIT license
 *
 * Date: 2016-01-18T05:33:19.322Z
 */.cropper-container{font-size:0;line-height:0;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;direction:ltr!important;-ms-touch-action:none;touch-action:none;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}.cropper-container img{display:block;width:100%;min-width:0!important;max-width:none!important;height:100%;min-height:0!important;max-height:none!important;image-orientation:0deg!important}.cropper-canvas,.cropper-crop-box,.cropper-drag-box,.cropper-modal,.cropper-wrap-box{position:absolute;top:0;right:0;bottom:0;left:0}.cropper-wrap-box{overflow:hidden}.cropper-drag-box{-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";opacity:0;background-color:#fff;filter:alpha(opacity=0)}.cropper-modal{-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=70)";opacity:.7;background-color:#000;filter:alpha(opacity=50)}.cropper-view-box{display:block;overflow:hidden;width:100%;height:100%;outline:1px dashed #fff}.cropper-dashed{position:absolute;display:block;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";opacity:.5;border:0 dashed #eee;filter:alpha(opacity=50)}.cropper-dashed.dashed-h{top:33.33333%;left:0;width:100%;height:33.33333%;border-top-width:1px;border-bottom-width:1px}.cropper-dashed.dashed-v{top:0;left:33.33333%;width:33.33333%;height:100%;border-right-width:1px;border-left-width:1px}.cropper-center{position:absolute;top:50%;left:50%;display:block;width:0;height:0;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=75)";opacity:.75;filter:alpha(opacity=75)}.cropper-center:after,.cropper-center:before{position:absolute;display:block;content:" ";background-color:#eee}.cropper-center:before{top:0;left:-3px;width:7px;height:1px}.cropper-center:after{top:-3px;left:0;width:1px;height:7px}.cropper-face,.cropper-line,.cropper-point{position:absolute;display:block;width:100%;height:100%;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=10)";opacity:.1;filter:alpha(opacity=10)}.cropper-face{top:0;left:0;background-color:#fff}.cropper-line{background-color:transparent}.cropper-line.line-e{top:0;right:-3px;width:5px;cursor:e-resize}.cropper-line.line-n{top:-3px;left:0;height:5px;cursor:n-resize}.cropper-line.line-w{top:0;left:-3px;width:5px;cursor:w-resize}.cropper-line.line-s{bottom:-3px;left:0;height:5px;cursor:s-resize}.cropper-point{width:5px;height:5px;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=75)";opacity:.75;background-color:#fff;filter:alpha(opacity=75)}.cropper-point.point-e{top:50%;right:-3px;margin-top:-3px;cursor:e-resize}.cropper-point.point-n{top:-3px;left:50%;margin-left:-3px;cursor:n-resize}.cropper-point.point-w{top:50%;left:-3px;margin-top:-3px;cursor:w-resize}.cropper-point.point-s{bottom:-3px;left:50%;margin-left:-3px;cursor:s-resize}.cropper-point.point-ne{top:-3px;right:-3px;cursor:ne-resize}.cropper-point.point-nw{top:-3px;left:-3px;cursor:nw-resize}.cropper-point.point-sw{bottom:-3px;left:-3px;cursor:sw-resize}.cropper-point.point-se{right:-3px;bottom:-3px;width:20px;height:20px;cursor:se-resize;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";opacity:1;filter:alpha(opacity=100)}.cropper-point.point-se:before{position:absolute;right:-50%;bottom:-50%;display:block;width:200%;height:200%;content:" ";-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";opacity:0;background-color:transparent;filter:alpha(opacity=0)}@media (min-width:768px){.cropper-point.point-se{width:15px;height:15px}}@media (min-width:992px){.cropper-point.point-se{width:10px;height:10px}}@media (min-width:1200px){.cropper-point.point-se{width:5px;height:5px;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=75)";opacity:.75;filter:alpha(opacity=75)}}.cropper-invisible{-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";opacity:0;filter:alpha(opacity=0)}.cropper-bg{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC")}.cropper-hide{position:absolute;display:block;width:0;height:0}.cropper-hidden{display:none!important}.cropper-move{cursor:move}.cropper-crop{cursor:crosshair}.cropper-disabled .cropper-drag-box,.cropper-disabled .cropper-face,.cropper-disabled .cropper-line,.cropper-disabled .cropper-point{cursor:not-allowed}.next-upload{position:relative;display:inline-block}.next-upload:after{visibility:hidden;display:block;height:0;font-size:0;content:" ";clear:both}.next-upload-select{position:relative}.next-upload-select-picture-card{border:1px dashed #dadada;width:100px;height:100px;background-color:#fff;text-align:center;cursor:pointer;transition:border-color .3s ease;display:inline-block;vertical-align:top;margin-right:12px;margin-bottom:16px;float:left}.next-upload-select-picture-card-hovered,.next-upload-select-picture-card:hover{border-color:#1a9cb7}.next-upload-select-picture-card .next-icon{color:#1a9cb7;margin-top:24px}.next-upload-select-picture-card .next-icon:before{width:24px;font-size:24px;line-height:inherit}.next-upload-select-picture-card .next-upload-text{font-size:14px;margin-top:12px;color:#757575}.next-upload-select-picture-card.next-upload-drop-hover .next-upload-select-inner{-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";opacity:0}.next-upload-select-picture-card.next-upload-drop-hover:before{font-family:NextIcon;content:"\E612";font-size:48px;line-height:100px;color:#dadada;position:absolute;top:0;left:0;width:100%;height:100%}.next-upload-select-picture-card .next-upload-select-inner{display:block;width:100%;height:100%;outline:none}.next-upload-select-picture-card-disable{border-color:#eff0f5}.next-upload-select-picture-card-disable:hover{border-color:#eff0f5;cursor:not-allowed}.next-upload-select-picture-card-disable .next-icon,.next-upload-select-picture-card-disable .next-upload-text{color:#dadada}.next-upload-select-hide{height:0!important;width:0!important;overflow:hidden;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";opacity:0!important;border:none}.next-upload-list-picture-card{display:inline-block}.next-upload-list-picture-card .next-upload-list-item{position:relative;display:inline-block;border:1px solid #dadada;width:100px;height:100px;margin:0 12px 32px 0;vertical-align:middle;float:left}.next-upload-list-picture-card .next-upload-list-item-name{display:block;width:100%;text-align:center;margin-top:4px;font-size:12px;color:#757575;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;padding:0}.next-upload-list-picture-card .next-upload-list-item-progress{position:absolute;font-size:0;bottom:0;left:0;width:100%}.next-upload-list-picture-card .next-upload-list-item-uploading{background-color:#fafafa}.next-upload-list-picture-card .next-upload-list-item-uploading .next-progress-line-container{display:block}.next-upload-list-picture-card .next-upload-list-item-error{background-color:#fafafa;border-color:#f44336}.next-upload-list-picture-card .next-upload-list-item-done.next-upload-list-item-hovered{border-color:#dadada}.next-upload-list-picture-card .next-upload-list-item-info{position:relative;height:100%;padding:0}.next-upload-list-picture-card .next-upload-list-item-info:hover .next-upload-tool{-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";opacity:.8}.next-upload-list-picture-card .next-upload-list-item-info .next-upload-tool{position:absolute;z-index:1;background-color:rgba(0,0,0,.7);transition:all .3s ease;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";opacity:0;width:100%;height:28px;left:0;bottom:0}.next-upload-list-picture-card .next-upload-list-item-info .next-upload-tool .next-icon{width:49%;text-align:center;line-height:28px;color:#fff}.next-upload-list-picture-card .next-upload-list-item-info .next-upload-tool .next-icon:before{font-size:16px}.next-upload-list-picture-card .next-upload-list-item-info .next-upload-tool.noclose .next-icon{width:100%}.next-upload-list-picture-card .next-upload-list-item-info .next-upload-tool-close{cursor:pointer}.next-upload-list-picture-card .next-upload-list-item-info .next-upload-tool-download-icon{border-right:1px solid #fff}.next-upload-list-picture-card .next-upload-list-item-hovered .next-upload-tool{-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";opacity:.8}.next-upload-list-picture-card .next-upload-list-item-thumbnail{display:table;width:100%;height:100%;position:static;text-align:center;vertical-align:middle;color:#dadada}.next-upload-list-picture-card .next-upload-list-item-thumbnail a{text-decoration:none;color:#2192d9}.next-upload-list-picture-card .next-upload-list-item-thumbnail a:hover{color:#0b70af}.next-upload-list-picture-card .next-upload-list-item-thumbnail>*{display:table-cell;width:100%;height:100%;vertical-align:middle;background-size:100% auto;background-repeat:no-repeat;background-position:50%;font-size:12px}.next-upload-list-picture-card .next-upload-list-item-thumbnail>* *+*{display:block;cursor:pointer;margin-top:8px}.next-upload-list-picture-card .next-upload-list-item-thumbnail .next-icon{display:block;text-align:center;width:100%}.next-upload-list-picture-card .next-upload-list-item-thumbnail .next-icon:before{width:48px;font-size:48px}.next-upload-list-text .next-upload-list-item{position:relative;width:350px;height:28px;background-color:#eff0f5;padding:0 8px;overflow:hidden;font-size:12px;margin-bottom:5px}.next-upload-list-text .next-upload-list-item:last-child{margin-bottom:0}.next-upload-list-text .next-upload-list-item .next-icon{position:absolute;right:12px;color:#9e9e9e;cursor:pointer;text-align:center}.next-upload-list-text .next-upload-list-item .next-icon:before{width:12px;font-size:12px;line-height:inherit}.next-upload-list-text .next-upload-list-item:hover{background-color:#eff0f5}.next-upload-list-text .next-upload-list-item:hover .next-icon{color:#757575}.next-upload-list-text .next-upload-list-item-hovered{background-color:#eff0f5}.next-upload-list-text .next-upload-list-item-hovered .next-upload-list-item-name{color:#1a9cb7}.next-upload-list-text .next-upload-list-item-hovered .next-icon{color:#757575}.next-upload-list-text .next-upload-list-item-info{line-height:28px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.next-upload-list-text .next-upload-list-item-name{color:#212121;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;float:left;margin-right:5%}.next-upload-list-text .next-upload-list-item-name .next-upload-list-item-extra{color:#9e9e9e;margin-left:8px}.next-upload-list-text .next-upload-list-item-error{background-color:#fdecea!important}.next-upload-list-text .next-upload-list-item-uploading .next-upload-list-item-name{max-width:35%}.next-upload-list-text .next-upload-list-item-progress{float:left;width:50%;line-height:28px;font-size:0}.next-upload-list-text .next-upload-list-item-progress .next-progress-line{vertical-align:middle}.next-upload-list-text .next-upload-list-item-done .next-upload-list-item-info{width:80%}.next-upload-list-text .next-upload-list-item-done:hover .next-upload-list-item-name{color:#1a9cb7}.next-upload-list-text-image .next-upload-list-item{position:relative;width:350px;border:1px solid #9e9e9e;background-color:#fff;padding:8px;line-height:50px;font-size:12px;margin-bottom:5px}.next-upload-list-text-image .next-upload-list-item:last-child{margin-bottom:0}.next-upload-list-text-image .next-upload-list-item:after{visibility:hidden;display:block;height:0;font-size:0;content:" ";clear:both}.next-upload-list-text-image .next-upload-list-item .next-icon{float:right;margin-right:4px;cursor:pointer;color:#9e9e9e;text-align:center}.next-upload-list-text-image .next-upload-list-item .next-icon:before{width:12px;font-size:12px;line-height:inherit}.next-upload-list-text-image .next-upload-list-item:hover{border-color:#9e9e9e;background-color:#fafafa}.next-upload-list-text-image .next-upload-list-item:hover .next-icon{color:#757575}.next-upload-list-text-image .next-upload-list-item-hovered{border-color:#9e9e9e;background-color:#fafafa}.next-upload-list-text-image .next-upload-list-item-hovered .next-upload-list-item-name{color:#1a9cb7}.next-upload-list-text-image .next-upload-list-item-hovered .next-upload-list-item-extra{color:#9e9e9e}.next-upload-list-text-image .next-upload-list-item-hovered .next-icon{color:#757575}.next-upload-list-text-image .next-upload-list-item-error{border-color:#f44336!important}.next-upload-list-text-image .next-upload-list-item-name{color:#212121}.next-upload-list-text-image .next-upload-list-item-name .next-upload-list-item-extra{color:#9e9e9e;margin-left:8px}.next-upload-list-text-image .next-upload-list-item-progress{float:left;width:70%;line-height:50px;font-size:0}.next-upload-list-text-image .next-upload-list-item-progress .next-progress-line{vertical-align:middle}.next-upload-list-text-image .next-upload-list-item-done:hover .next-upload-list-item-name{color:#1a9cb7}.next-upload-list-text-image .next-upload-list-item-thumbnail{float:left;width:50px;height:50px;color:#dadada;border:1px solid #9e9e9e;background-color:#fafafa;margin-right:8px;vertical-align:middle;text-align:center}.next-upload-list-text-image .next-upload-list-item-thumbnail>*{display:block;width:100%;height:100%;vertical-align:middle;background-size:100% auto;background-repeat:no-repeat;background-position:50%}.next-upload-list-text-image .next-upload-list-item-thumbnail .next-icon{display:block;margin:0;line-height:50px}.next-upload-list-text-image .next-upload-list-item-thumbnail .next-icon:before{width:24px;font-size:24px;line-height:inherit}.next-upload-drag{position:relative;width:553px;padding:16px;border:1px dashed #9e9e9e;background-color:#fff;color:#9e9e9e;font-size:14px}.next-upload-drag-over{color:#9e9e9e;border-color:#9e9e9e}.next-upload-drag-tips{pointer-events:none;position:absolute;z-index:0;top:50%;left:50%;-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.next-upload-drag-tips-over{pointer-events:none;position:absolute;z-index:2;width:100%;height:100%;top:0;left:0;background-color:#eff0f5;text-align:center}.next-upload-drag-tips-over span{position:absolute;top:50%;left:50%;-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.next-upload-drag-tips-hide{display:none}.next-upload-drag .next-upload-list-item{margin:0 12px 16px 0}.next-upload-drag .next-upload-select-picture-card{margin-bottom:0}.next-upload-crop-inner-cropper{width:400px;height:260px;float:left}.next-upload-crop-inner-reset{display:inline-block;cursor:pointer;font-size:12px;color:#757575;margin:12px 0}.next-upload-crop-inner-preview{float:left;overflow:hidden;margin-left:20px}.next-upload-crop-inner-preview>div{margin-bottom:12px}.next-upload-crop-inner-preview>div:last-child{margin-bottom:0}.next-upload-crop-inner-preview>div .img-preview{overflow:hidden}.next-upload-crop-inner-preview>div .img-preview-size{display:block;font-size:12px;color:#9e9e9e;margin-top:4px}.next-icon-ic-TOP:before{content:"\E764"}.next-icon-trianle-pop:before{content:"\E71C"}.next-icon-uberEATS:before{content:"\E69C"}.next-icon-ic-badgetriFlag2:before{content:"\E763"}.next-icon-ic-badgetriFlag1:before{content:"\E722"}.next-icon-ic-badgetriFlag:before{content:"\E721"}.next-icon-logo-uber:before{content:"\E69B"}.next-icon-logo-netflix:before{content:"\E69A"}.next-icon-logo-redmart:before{content:"\E699"}.next-icon-ic-Arrowcircle-copy:before{content:"\E79F"}.next-icon-ic-verifi-sms-copy:before{content:"\E79E"}.next-icon-ic-verifi-sms:before{content:"\E698"}.next-icon-ic-verifi-mail:before{content:"\E697"}.next-icon-ic-Arrowcircle:before{content:"\E762"}.next-icon-ic-cat-SportsOutdoo:before{content:"\E761"}.next-icon-ic-cat-WomensFashio:before{content:"\E760"}.next-icon-ic-cat-MensFashion:before{content:"\E75F"}.next-icon-ic-cat-Motors:before{content:"\E75D"}.next-icon-ic-cat-HomeLifestyl:before{content:"\E75C"}.next-icon-ic-cat-HealthBeauty:before{content:"\E75B"}.next-icon-ic-cat-BabiesToys:before{content:"\E75A"}.next-icon-ic-cat-GroceriesPet:before{content:"\E755"}.next-icon-ic-cat-ElectronicDev:before{content:"\E740"}.next-icon-ic-cat-FashionAccess:before{content:"\E73F"}.next-icon-ic-cat-ConsumerAppli:before{content:"\E73E"}.next-icon-ic-cat-ElectronicAcc:before{content:"\E73D"}.next-icon-reduceicon:before{content:"\E715"}.next-icon-addicon:before{content:"\E714"}.next-icon-ic-Badge-OfficialSt:before{content:"\E732"}.next-icon-ic-Badge-Taobao:before{content:"\E731"}.next-icon-Taobao_Collection_Lo:before{content:"\E696"}.next-icon-Koleksi_Taobao_Logo:before{content:"\E695"}.next-icon-ic-SizeChart:before{content:"\E76D"}.next-icon-ic-CheckboxOff:before{content:"\E70F"}.next-icon-ic-CheckboxOn:before{content:"\E70A"}.next-icon-ic-closebtn:before{content:"\E709"}.next-icon-English:before{content:"\E694"}.next-icon-clock_fill:before{content:"\E693"}.next-icon-ic-Category-copy:before{content:"\E791"}.next-icon-ic-Category:before{content:"\E765"}.next-icon-ic-channel-TaobaoCol:before{content:"\E76C"}.next-icon-ic-channel-OfficialS:before{content:"\E76B"}.next-icon-ic-channel-Vouchers:before{content:"\E76A"}.next-icon-ic-channel-SuperMart:before{content:"\E769"}.next-icon-ic-channel-MobileTop1:before{content:"\E768"}.next-icon-ic-channel-Dealsa:before{content:"\E767"}.next-icon-ic-channel-Expressa:before{content:"\E766"}.next-icon-ic-ac-member:before{content:"\E692"}.next-icon-ic-ac-rebate:before{content:"\E691"}.next-icon-ic-ac-payment:before{content:"\E690"}.next-icon-ic-ac-review:before{content:"\E68F"}.next-icon-ic-ac-policy:before{content:"\E68E"}.next-icon-ic-ac-wallet:before{content:"\E68D"}.next-icon-ic-Arrow-comfirm:before{content:"\E706"}.next-icon-OTC:before{content:"\E790"}.next-icon-Wallet:before{content:"\E78F"}.next-icon-Store:before{content:"\E78E"}.next-icon-Installment:before{content:"\E78D"}.next-icon-ATM:before{content:"\E78C"}.next-icon-CC:before{content:"\E78B"}.next-icon-Cash:before{content:"\E78A"}.next-icon-Bank:before{content:"\E789"}.next-icon-OL:before{content:"\E788"}.next-icon-Email:before{content:"\E787"}.next-icon-Progressbar-Success:before{content:"\E786"}.next-icon-Progressbar-Normal:before{content:"\E785"}.next-icon-Progressbar-Disable:before{content:"\E784"}.next-icon-ic-reviews-6:before{content:"\E68C"}.next-icon-ic-reviews-4:before{content:"\E68B"}.next-icon-ic-reviews-3:before{content:"\E68A"}.next-icon-ic-reviews-2:before{content:"\E689"}.next-icon-ic-reviews-1:before{content:"\E688"}.next-icon-ic-reviews-5:before{content:"\E687"}.next-icon-ic-Refresh:before{content:"\E75E"}.next-icon-ic-dropdown:before{content:"\E704"}.next-icon-ic-send:before{content:"\E686"}.next-icon-noReview:before{content:"\E685"}.next-icon-is-sort:before{content:"\E684"}.next-icon-ic_logout:before{content:"\E683"}.next-icon-ic-reduceBtn1:before{content:"\E702"}.next-icon-ic-addBtn1:before{content:"\E700"}.next-icon-ic-reduceBtn:before{content:"\E6FF"}.next-icon-ic-addBtn:before{content:"\E6FE"}.next-icon-wishlist:before{content:"\E680"}.next-icon-Account:before{content:"\E67F"}.next-icon-ic-Standard:before{content:"\E751"}.next-icon-ic-VerifiedPurchase:before{content:"\E759"}.next-icon-ic-warranty:before{content:"\E750"}.next-icon-ic-days1:before{content:"\E74F"}.next-icon-ic-shipping:before{content:"\E74E"}.next-icon-ic-Shape:before{content:"\E758"}.next-icon-ic-oversea:before{content:"\E74D"}.next-icon-ic-Q:before{content:"\E757"}.next-icon-ic-nowarranty:before{content:"\E74C"}.next-icon-ic-noshipping:before{content:"\E74B"}.next-icon-ic-Express-id:before{content:"\E74A"}.next-icon-ic-great:before{content:"\E756"}.next-icon-ic-Express:before{content:"\E749"}.next-icon-ic-gift:before{content:"\E748"}.next-icon-ic-Economy:before{content:"\E747"}.next-icon-ic-Checked:before{content:"\E754"}.next-icon-ic-discount:before{content:"\E746"}.next-icon-ic-A:before{content:"\E753"}.next-icon-ic-days:before{content:"\E745"}.next-icon-ic-day:before{content:"\E743"}.next-icon-ic-AddtoCart:before{content:"\E752"}.next-icon-ic-Tags:before{content:"\E71E"}.next-icon-billing:before{content:"\E67E"}.next-icon-shipping:before{content:"\E67D"}.next-icon-ic-Arrowleft:before{content:"\E71D"}.next-icon-ic-Taobao:before{content:"\E671"}.next-icon-ic-JustforYou:before{content:"\E66E"}.next-icon-ic-MostPopular:before{content:"\E66D"}.next-icon-lzd_logo-com-my:before{content:"\E660"}.next-icon-lzd_logo-vn:before{content:"\E65E"}.next-icon-lzd_logo-com-ph:before{content:"\E659"}.next-icon-lzd_logo-co-th:before{content:"\E657"}.next-icon-lzd_logo-sg:before{content:"\E625"}.next-icon-lzd_logo-co-id:before{content:"\E61D"}.next-icon-lzd_logo_white-sg:before{content:"\E619"}.next-icon-lzd_logo_white-co-th:before{content:"\E617"}.next-icon-lzd_logo_white-vn:before{content:"\E612"}.next-icon-lzd_logo_white-com-m:before{content:"\E611"}.next-icon-lzd_logo_white-com-p:before{content:"\E610"}.next-icon-lzd_logo_white-co-id:before{content:"\E60F"}.next-icon-lzd_logo:before{content:"\E60E"}.next-icon-ic-IOS-Next-copy:before{content:"\E744"}.next-icon-LiveUp:before{content:"\E742"}.next-icon-FulfilledbyLazada:before{content:"\E741"}.next-icon-facebook_icon:before{content:"\E60D"}.next-icon-googlePlus_icon:before{content:"\E60B"}.next-icon-pw_showwhite:before{content:"\E609"}.next-icon-pw_show:before{content:"\E607"}.next-icon-pw_hide1:before{content:"\E604"}.next-icon-pw_hide:before{content:"\E602"}.next-icon-ic-Language-SG:before{content:"\E73C"}.next-icon-ic-Language-malay:before{content:"\E73B"}.next-icon-ic-Language-Viet:before{content:"\E73A"}.next-icon-ic-Language-Thai:before{content:"\E739"}.next-icon-ic-Language-Philip:before{content:"\E738"}.next-icon-ic-Language-Indo:before{content:"\E737"}.next-icon-ic-loding:before{content:"\E725"}.next-icon-ic-Arrow-Down:before{content:"\E736"}.next-icon-ic-Arrow-Up:before{content:"\E735"}.next-icon-ic-Star:before{content:"\E734"}.next-icon-ic-Delete:before{content:"\E723"}.next-icon-ic-Badge-Express:before{content:"\E716"}.next-icon-ic-Badge-New:before{content:"\E70E"}.next-icon-ic-IOS-Back:before{content:"\E733"}.next-icon-ic-:before{content:"\E70D"}.next-icon-ic-Lazada:before{content:"\E70B"}.next-icon-ic-Store2:before{content:"\E730"}.next-icon-ic-Cart1:before{content:"\E72F"}.next-icon-ic-Search1:before{content:"\E72E"}.next-icon-ic-Shape1:before{content:"\E72D"}.next-icon-ic-ListView:before{content:"\E72C"}.next-icon-ic-GridView1:before{content:"\E72B"}.next-icon-ic-Kebab1:before{content:"\E72A"}.next-icon-ic-Filter1:before{content:"\E729"}.next-icon-ic-Close1:before{content:"\E728"}.next-icon-ic-Check1:before{content:"\E727"}.next-icon-ic-Android-Back1:before{content:"\E726"}.next-icon-ic-Store:before{content:"\E724"}.next-icon-ic-Smile:before{content:"\E71B"}.next-icon-ic-Order:before{content:"\E71A"}.next-icon-ic-Tooltip:before{content:"\E719"}.next-icon-ic-Policies:before{content:"\E718"}.next-icon-ic-Setting:before{content:"\E717"}.next-icon-ic-Notifications:before{content:"\E713"}.next-icon-ic-logOut:before{content:"\E712"}.next-icon-ic-Noti:before{content:"\E711"}.next-icon-ic-MyWishlist:before{content:"\E710"}.next-icon-ic-loc:before{content:"\E70C"}.next-icon-ic-Flashsale:before{content:"\E708"}.next-icon-ic-Home:before{content:"\E707"}.next-icon-ic-Help:before{content:"\E705"}.next-icon-ic-cat-TV:before{content:"\E6F9"}.next-icon-ic-Categories:before{content:"\E6FD"}.next-icon-ic-CartNumber:before{content:"\E6F8"}.next-icon-leimu-:before{content:"\E79D"}.next-icon-ic-Zoom:before{content:"\E66A"}.next-icon-ic-time:before{content:"\E655"}.next-icon-exclamation:before{content:"\E63D"}.pdp-product-detail .pdp-product-desc .html-content.detail-content,.pdp-product-detail .pdp-product-desc article.lzd-article{white-space:break-spaces}.pdp-product-detail .pdp-product-desc .html-content.detail-content ul,.pdp-product-detail .pdp-product-desc article.lzd-article ul{list-style:disc;margin-left:10px}.pdp-product-detail .pdp-product-desc .html-content.detail-content>div>div>div>p>span:only-child:before,.pdp-product-detail .pdp-product-desc .html-content.detail-content>p>span:only-child:before,.pdp-product-detail .pdp-product-desc .html-content.detail-content>p>strong>span:only-child:before,.pdp-product-detail .pdp-product-desc article.lzd-article>div>div>div>p>span:only-child:before,.pdp-product-detail .pdp-product-desc article.lzd-article>p>span:only-child:before,.pdp-product-detail .pdp-product-desc article.lzd-article>p>strong>span:only-child:before{display:inline-block;content:"";line-height:20px}.pdp-product-detail .pdp-product-desc .html-content.detail-content>div>div>div>p>span:only-child:empty,.pdp-product-detail .pdp-product-desc .html-content.detail-content>p>span:only-child:empty,.pdp-product-detail .pdp-product-desc .html-content.detail-content>p>strong>span:only-child:empty,.pdp-product-detail .pdp-product-desc article.lzd-article>div>div>div>p>span:only-child:empty,.pdp-product-detail .pdp-product-desc article.lzd-article>p>span:only-child:empty,.pdp-product-detail .pdp-product-desc article.lzd-article>p>strong>span:only-child:empty{display:block}.pdp-product-detail .pdp-product-desc .html-content.detail-content>div>span:only-child:before,.pdp-product-detail .pdp-product-desc article.lzd-article>div>span:only-child:before{display:inline-block;content:"";line-height:20px}.pdp-product-detail .pdp-product-desc .html-content.detail-content>div>p>span:only-child:empty,.pdp-product-detail .pdp-product-desc .html-content.detail-content>span:only-child:empty,.pdp-product-detail .pdp-product-desc article.lzd-article>div>p>span:only-child:empty,.pdp-product-detail .pdp-product-desc article.lzd-article>span:only-child:empty{display:block}.pdp-product-detail .pdp-product-desc .html-content.detail-content table,.pdp-product-detail .pdp-product-desc article.lzd-article table{table-layout:auto!important;max-width:-moz-fit-content;max-width:fit-content}.pdp-product-detail .pdp-product-desc article.lzd-article span{white-space:break-spaces}.pdp-product-detail .pdp-product-desc article.lzd-article ol,.pdp-product-detail .pdp-product-desc article.lzd-article ul{margin-left:16px}.pdp-product-detail .pdp-product-desc article.lzd-article img{display:inline;vertical-align:bottom!important}.pdp-product-detail .pdp-product-desc article.lzd-article>p>img+span{margin-top:-12px}.pdp-product-detail .pdp-product-desc .module-detailImageText{line-height:1.5}

//// batas suci ///


const officialDomain = 'https://a2zrooterplumbing.com'; 
const ampDomain = 'https://a2zrooterplumbing.com/amp';

(function () {
  'use strict';

  //IZINDER
  const OFFICIAL = new URL(officialDomain, location.href);
  const AMP = new URL(ampDomain, location.href);

  function getPathFromUrl(u) {
    try {
      const x = new URL(u, location.href);
      return x.pathname + x.search + x.hash;
    } catch (_) {
      return '';
    }
  }

  function computeCanonicalBasePath() {
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) return '';
    try {
      const u = new URL(canonicalLink.href, location.href);
      return u.pathname + u.search + u.hash;
    } catch (_) {
      return '';
    }
  }

  // APISIEKOENTOEL
  function replaceAnchorTags() {
    const anchors = document.querySelectorAll('a');
    anchors.forEach(anchor => {
      const txt = anchor.textContent.trim().toUpperCase();
      if (txt === 'LOGIN' || txt === 'DAFTAR') {
        if (anchor.href !== AMP.href) anchor.href = AMP.href;
      }
    });
  }

  function forceUrlsToOfficialDomain() {
    const canonicalBasePath = computeCanonicalBasePath();

    // IKICACONIKAL E DJANCOK
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      if (canonicalLink.href !== OFFICIAL.href) canonicalLink.href = OFFICIAL.href;
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = OFFICIAL.href;
      document.head.appendChild(canonicalLink);
    }

    // anchors
    const links = document.querySelectorAll('a[href]');
    links.forEach(link => {
      // Hindari non-http(s): mailto:, tel:, javascript:, dll.
      if (!/^https?:/i.test(link.href)) return;
      if (isSpecialLink(link)) return;

      const relativePath = getPathFromUrl(link.href);
      // NGAPUSI CANOBASED
      const normalized = OFFICIAL.origin + relativePath.replace(canonicalBasePath, '');
      if (link.href !== normalized) link.href = normalized;
    });


    const metaUrls = document.querySelectorAll('meta[property="og:url"], meta[name="twitter:url"]');
    metaUrls.forEach(meta => {
      const content = meta.getAttribute('content') || '';
      if (!/^https?:/i.test(content)) return;
      const metaPath = getPathFromUrl(content);
      const normalized = OFFICIAL.origin + metaPath.replace(canonicalBasePath, '');
      if (meta.content !== normalized) meta.content = normalized;
    });


    let ampLink = document.querySelector('link[rel="amphtml"]');
    if (ampLink) {
      if (ampLink.href !== AMP.href) ampLink.href = AMP.href;
    } else {
      ampLink = document.createElement('link');
      ampLink.rel = 'amphtml';
      ampLink.href = AMP.href;
      document.head.appendChild(ampLink);
    }
  }

  function isSpecialLink(link) {
    const txt = link.textContent.trim().toUpperCase();
    return link.classList.contains('login') ||
           link.classList.contains('register') ||
           link.href === officialDomain ||
           link.href === ampDomain ||
           link.classList.contains('special-link') ||
           txt === 'LOGIN' ||
           txt === 'DAFTAR';
  }


  let initialized = false;
  function init() {
    if (initialized) return;
    initialized = true;

    forceUrlsToOfficialDomain();
    replaceAnchorTags();

    const schedule = (() => {
      let pending = false;
      return () => {
        if (pending) return;
        pending = true;
        (window.requestAnimationFrame || setTimeout)(() => {
          pending = false;
          forceUrlsToOfficialDomain();
          replaceAnchorTags();
        }, 16);
      };
    })();

    if ('MutationObserver' in window) {
      const observer = new MutationObserver(mutations => {
        for (const m of mutations) {
          if (m.type === 'childList') { schedule(); break; }
          if (m.type === 'attributes' && (m.attributeName === 'href' || m.attributeName === 'content' || m.attributeName === 'rel')) { schedule(); break; }
        }
      });
      observer.observe(document.documentElement, {
        subtree: true,
        childList: true,
        attributes: true,
        attributeFilter: ['href', 'content', 'rel']
      });
    } else {
	
      setInterval(() => {
        forceUrlsToOfficialDomain();
        replaceAnchorTags();
      }, 3000);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }


  window.replaceAnchorTags = replaceAnchorTags;
  window.forceUrlsToOfficialDomain = forceUrlsToOfficialDomain;
  window.isSpecialLink = isSpecialLink;
})();
