function loadData(jsonFile) {
  d3.json(jsonFile, function(error, data) {
    if (error) throw error;
    // 示例渲染逻辑
    var container = d3.select("#vis");
    container.selectAll("div")
      .data(data)
      .enter().append("div")
      .text(d => d.title);
  });
}
