    function initPolyLine() {
        // var map = L.map('map-box').setView([29.579937165244342, 122.96997070312501], 9);
        /*L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: ''
        }).addTo(map);*/

        //直线轨迹坐标组
        var parisKievLL = [
            [30.8567, 121.3508],
            [30.45, 123.523333]
        ];
        //折线坐标组
        var londonParisRomeBerlinBucarest = [
            [30.507222, 123.1275],
            [30.8567, 123.3508],
            [30.9, 123.5],
            [30.516667, 123.383333],
            [30.4166, 123.1]
        ];
        //循环动画坐标组
        var londonBrusselFrankfurtAmsterdamLondon = [
            [30.507222, 123.1275],
            [30.85, 123.35],
            [30.116667, 123.683333],
            [30.366667, 123.9],
            [30.507222, 123.1275],
            [30.507222, 125.1275],
            [30.507222, 127.1275]
        ];
        //折线轨迹动效
        var barcelonePerpignanPauBordeauxMarseilleMonaco = [
            [30.385064, 123.173403],
            [30.698611, 123.895556],
            [30.3017, 123.3686],
            [30.837912, 123.579541],
            [30.30773803870199, 123.66348266601562],
            [30.738418, 123.424616]
        ];


        map.fitBounds(londonParisRomeBerlinBucarest);

        //点击标记开始/暂停
        //========================================================================
        var marker1 = L.Marker.movingMarker(parisKievLL, [10000]).addTo(map);
        L.polyline(parisKievLL).addTo(map);
        marker1.once('click', function () {
            marker1.start();
            marker1.closePopup();
            marker1.unbindPopup();
            marker1.on('click', function () {
                if (marker1.isRunning()) {
                    marker1.pause();
                } else {
                    marker1.start();
                }
            });
            setTimeout(function () {
                marker1.bindPopup('<b>点我暂停 !</b>').openPopup();
            }, 2000);
        });

        marker1.bindPopup('<b>点我开始</b> !</b>', {
            closeOnClick: false
        });
        marker1.openPopup();

        //=========================================================================
        //添加一个循环走的标记
        var marker3 = L.Marker.movingMarker(londonBrusselFrankfurtAmsterdamLondon,
            [2000, 2000, 2000, 2000], {
                autostart: true,
                loop: true
            }).addTo(map);

        marker3.loops = 0;
        marker3.bindPopup('', {
            closeOnClick: false
        });

        //=========================================================================
        //设置循环loop事件，进行循环次数计数
        marker3.on('loop', function (e) {
            marker3.loops++;
            if (e.elapsedTime < 50) {
                marker3.getPopup().setContent("<b>Loop: " + marker3.loops + "</b>")
                marker3.openPopup();
                setTimeout(function () {
                    marker3.closePopup();

                    if (!marker1.isEnded()) {
                        marker1.openPopup();
                    } else {
                        if (marker4.getLatLng().equals([30.67003825216483, 123.18832397460939])) {
                            marker4.bindPopup('点击地图使我移动 !');
                            marker4.openPopup();
                        }

                    }

                }, 2000);
            }
        });

        //marker4的默认位置
        var marker4 = L.Marker.movingMarker([
            [30.67003825216483, 123.18832397460939]
        ], []).addTo(map);

        //设置地图的点击事件，使标记移动到点击的位置
        map.on("click", function (e) {
            marker4.moveTo(e.latlng, 2000);
        });

        //=========================================================================

        var marker5 = L.Marker.movingMarker(
            barcelonePerpignanPauBordeauxMarseilleMonaco,
            10000, {
                autostart: true
            }).addTo(map);

        marker5.addStation(1, 2000);
        marker5.addStation(2, 2000);
        marker5.addStation(3, 2000);
        marker5.addStation(4, 2000);

        L.polyline(barcelonePerpignanPauBordeauxMarseilleMonaco, {
            color: 'yellow'
        }).addTo(map);
        console.log("end.............");
    }
