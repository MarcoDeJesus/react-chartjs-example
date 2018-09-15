import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{

    state = { chartData:  {
        labels: ["2018-06-30:7", "2018-06-30:8", "2018-06-30:9", "2018-06-30:10", "2018-06-30:11", "2018-06-30:12", "2018-06-30:13"],
        datasets: [
            {
                label: 'Total Logins',
                data: [594, 633, 631, 581, 511, 458, 502],
                backgroundColor: 'rgba(0, 204, 0, 0.5)',
                borderColor: 'rgba(0, 204, 0,1)',
                borderWidth: 1
            },         
            {
                label: 'Unique Logins',
                data: [519, 519, 538, 499, 441, 382, 429],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1    
            }
        ]
    }
     }

    render(){
        return(
            <div className="chart"> 
            
                <Bar 
                    data={this.state.chartData}
                    width={100}
                    height={40}

                    options={{
                        "hover": {
                            "animationDuration": 0
                        },
                        "animation": {
                            "duration": 1,
                            "onComplete": function() {
                                var chartInstance = this.chart,
                                ctx = chartInstance.ctx;

                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'bottom';

                                this.data.datasets.forEach(function(dataset, i) {
                                    var meta = chartInstance.controller.getDatasetMeta(i);
                                    meta.data.forEach(function(bar, index) {
                                        var data = dataset.data[index];
                                        ctx.fillText(data, bar._model.x, bar._model.y - 5);
                                    });
                                });
                            }
                        },
                        legend: {
                            "display": true
                        },
                        tooltips: {
                            "enabled": false
                        },
                        title: {
                            display: true,
                            text: 'The Title of the Report',
                            fontSize: 28,
                            position: 'top',
                            fontFamily: 'Arial'
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero:true
                                }
                            }]
                        }
                    }
                                }

                            />
                        </div>
                    );
                }
            }

export default Chart
