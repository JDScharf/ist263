require([
    "esri/Config",
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer"
  ], function(esriConfig, Map, MapView, FeatureLayer) {
    // Set API Key
    esriConfig.apiKey = "AAPK3850a9ec91324a028768557dfc40d4ffvcIaUta3f0VFXfQzaX-fRYTub_0wRicii4v_tCY7CXnPSWbfsb44_DLmQKj3rJHv"

    //        Example from Arcgis site: https://developers.arcgis.com/javascript/latest/display-a-map/#reference-the-api

    // Create the map
    const map = new Map({
      basemap: "streets-vector"
    });
  
    // Create the view
    const view = new MapView({
      container: "viewDiv",
      map: map,
      center: [-100, 40], // Longitude, latitude
      zoom: 4
    });
  
    // Feature layer (replace with your own layer URL)
    const featureLayer = new FeatureLayer({
      url: "https://services6.arcgis.com/bdPqSfflsdgFRVVM/arcgis/rest/services/Code_Violations_V2/FeatureServer/0"
    });
  
    map.add(featureLayer);
  
    // Fetch data and create chart
    view.when(() => {
      featureLayer.queryFeatures({
        where: "1=1", // Fetch all features
        outFields: ["status_type_name", "neighborhood"],
        returnGeometry: false
      }).then(response => {
        const data = response.features.map(feature => ({
          status: feature.attributes.status_type_name,
          neighborhood: feature.attributes.neighborhood
        }));
  
        createBarChart(data);
      });
    });
  
    // Create the D3 bar chart
    function createBarChart(data) {
      const width = 800;
      const height = 400;
      const margin = { top: 20, right: 30, bottom: 40, left: 50 };
  
      const svg = d3.select("#chartDiv")
        .append("svg")
        .attr("width", width)
        .attr("height", height);
  
      const x = d3.scaleBand()
        .domain(data.map(d => d.status))
        .range([margin.left, width - margin.right])
        .padding(0.1);
  
      const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.neighborhood)])
        .nice()
        .range([height - margin.bottom, margin.top]);
  
      svg.append("g")
        .attr("fill", "steelblue")
        .selectAll("rect")
        .data(data)
        .join("rect")
        .attr("x", d => x(d.status))
        .attr("y", d => y(d.neighborhood))
        .attr("height", d => y(0) - y(d.neighborhood))
        .attr("width", x.bandwidth());
  
      svg.append("g")
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "rotate(-45)")
        .style("text-anchor", "end");
  
      svg.append("g")
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y));
    }
    // console.log(chart)
    // return chart
  });
  