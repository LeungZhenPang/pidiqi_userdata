<template>
  <div class="wrap">
    <div id="main"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import Axios from "axios";
export default {
  data() {
    return {
      option: {
        legend: {},
        tooltip: {
          trigger: "axis",
          showContent: false
        },
        dataset: {
          source: [
            ["时间","6天前", "5天前", "4天前", "3天前", "前天", "昨天", "今天"],
            ["信息流", 41.1, 30.4, 65.1, 53.3, 183.8, 98.7,20],
            ["表单", 86.5, 92.1, 85.7, 83.1, 73.4, 55.1,20],
            ["深圳", 24.1, 67.2, 79.5, 86.4, 65.2, 82.5,20],
            ["首咨", 55.2, 67.1, 69.2, 72.4, 53.9, 39.1,20]
          ]
        },
        xAxis: { type: "category" },
        yAxis: { gridIndex: 0 },
        grid: { top: "50%" },
        series: [
          { type: "line", smooth: true, seriesLayoutBy: "row" },
          { type: "line", smooth: true, seriesLayoutBy: "row" },
          { type: "line", smooth: true, seriesLayoutBy: "row" },
          { type: "line", smooth: true, seriesLayoutBy: "row" },
          {
            type: "pie",
            id: "pie",
            radius: "30%",
            center: ["50%", "25%"],
            label: {
              formatter: "{b}: {@今天} ({d}%)"
            },
            encode: {
              itemName: "时间",
              value: "今天",
              tooltip: "今天"
            }
          }
        ]
      }
    };
  },
  methods: {
    async loadData() {
      let { data } = await Axios.get(
        "http://unobb.cn/pidiqidata/loadWeekData.php"
      );
      //   this.option.dataset.source = data
      this.$set(this.option.dataset, "source", data);
      let myChart = echarts.init(document.getElementById("main"));
      myChart.setOption(this.option);
      myChart.on("updateAxisPointer", function(event) {
        var xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
          var dimension = xAxisInfo.value + 1;
          myChart.setOption({
            series: {
              id: "pie",
              label: {
                formatter: "{b}: {@[" + dimension + "]} ({d}%)"
              },
              encode: {
                value: dimension,
                tooltip: dimension
              }
            }
          });
        }
      });
    }
  },
  mounted() {},
  created() {
    this.loadData();
  }
};
</script>

<style lang="less" scoped>
.wrap {
  width: 90%;
  height: 800px;
//   background: #f1f1f1;
  padding-top: 20px;
  margin: 0 auto;
  #main {
    width: 100%;
    height: 100%;
  }
}
</style>