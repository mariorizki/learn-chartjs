import React from 'react';
import { Bar } from 'react-chartjs-2';

function BarChart() {
  const data = {
    labels: [
      ['Daya', 'Tangkap'],
      ['Kemampuan', 'Numerik'],
      ['Kemampuan', 'Analisis'],
      ['Fleksibilitas', 'Berpikir'],
      ['Abstraksi', 'Verbal'],
      ['Abstraksi', 'Ruang'],
      ['Daya', 'Ingat']
    ],
    datasets: [
      {
        data: [1, 2, 7, 3, 5, 1, 4],
        backgroundColor: [
          '#ffadad',
          '#ffd6a5',
          '#fdffb6',
          '#caffbf',
          '#9bf6ff',
          '#a0c4ff',
          '#bdb2ff'
        ]
      }
    ]
  };
  return (
    <div style={{ height: '500px', width: '80%', margin: '2px auto' }}>
      <Bar
        data={data}
        options={{
          title: {
            display: true,
            text: 'PSIKOGRAM',
            fontSize: 24
          },
          maintainAspectRatio: false,
          legend: { display: false },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }}
      />
    </div>
  );
}

export default BarChart;
