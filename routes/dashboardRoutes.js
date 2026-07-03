const express = require('express');
const router = express.Router();

router.get('/dashboard', (req, res) => {
    res.json({
        kpis: [
            { title: 'City Population', value: '1.2M', color: '' },
            { title: 'Active Alerts', value: '3', color: 'var(--warning-color)' },
            { title: 'Air Quality (AQI)', value: '42', color: 'var(--success-color)' },
            { title: 'Power Demand', value: '850 MW', color: 'var(--info-color)' }
        ],
        chartData: {
            traffic: {
                labels: ['8 AM', '10 AM', '12 PM', '2 PM', '4 PM', '6 PM'],
                datasets: [{
                    label: 'Traffic Volume',
                    data: [1200, 1900, 1500, 1700, 2200, 2800],
                    borderColor: '#4facfe',
                    tension: 0.4,
                    fill: true,
                    backgroundColor: 'rgba(79, 172, 254, 0.2)'
                }]
            },
            energy: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Power Consumption (MW)',
                    data: [800, 850, 900, 950, 920, 700, 680],
                    backgroundColor: '#f6d365',
                    borderRadius: 8
                }]
            }
        }
    });
});

router.get('/traffic', (req, res) => {
    res.json({
        kpis: [
            { title: 'Active Vehicles', value: '45,210', color: '' },
            { title: 'Congestion Hotspots', value: '7', color: 'var(--danger-color)' },
            { title: 'AI Optimization', value: 'Active', color: 'var(--success-color)' }
        ],
        chartData: {
            congestion: {
                labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
                datasets: [
                    { label: 'Downtown', data: [20, 15, 80, 60, 90, 50, 30], borderColor: '#ff0844', tension: 0.4, borderWidth: 3 },
                    { label: 'Suburbs', data: [10, 5, 40, 30, 45, 25, 15], borderColor: '#00b09b', tension: 0.4, borderWidth: 3 }
                ]
            }
        }
    });
});

router.get('/air', (req, res) => {
    res.json({
        kpis: [
            { title: 'Overall AQI', value: '42 (Good)', color: 'var(--success-color)' },
            { title: 'PM 2.5 Avg', value: '12.5 µg/m³', color: 'var(--warning-color)' },
            { title: 'CO2 Level', value: '412 ppm', color: '' }
        ],
        chartData: {
            aqi: {
                labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
                datasets: [
                    { label: 'AQI Forecast', data: [42, 45, 55, 50, 40, 35, 38], borderColor: '#00f2fe', backgroundColor: 'rgba(0, 242, 254, 0.2)', fill: true, tension: 0.4, borderWidth: 3 }
                ]
            }
        }
    });
});

router.get('/energy', (req, res) => {
    res.json({
        kpis: [
            { title: 'Grid Status', value: 'Stable', color: '', valueColor: 'var(--success-color)' },
            { title: 'Daily Consumption', value: '12,400 MWh', color: 'var(--info-color)' },
            { title: 'Renewable Output', value: '4,100 MWh', color: 'var(--success-color)' }
        ],
        chartData: {
            renewable: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                    { label: 'Solar Output (MWh)', data: [1200, 1350, 1500, 1700, 1900, 2100], backgroundColor: '#f6d365', borderRadius: 6 },
                    { label: 'Wind Output (MWh)', data: [900, 850, 1100, 1050, 950, 800], backgroundColor: '#4facfe', borderRadius: 6 }
                ]
            }
        }
    });
});

router.get('/waste', (req, res) => {
    res.json({
        kpis: [
            { title: 'Bins Full (>90%)', value: '145', color: '', valueColor: 'var(--danger-color)' },
            { title: 'Trucks Dispatched', value: '32', color: 'var(--success-color)' },
            { title: 'Recycling Rate', value: '45.2%', color: 'var(--info-color)' }
        ],
        chartData: {
            distribution: {
                labels: ['Recyclable', 'Organic', 'Hazardous', 'General Waste'],
                datasets: [{
                    data: [45, 30, 5, 20],
                    backgroundColor: ['#00b09b', '#96c93d', '#ff0844', '#64748b'],
                    borderWidth: 0
                }]
            }
        }
    });
});

router.get('/water', (req, res) => {
    res.json({
        kpis: [
            { title: 'Reservoir Level', value: '78%', color: 'var(--info-color)' },
            { title: 'Active Leaks Detected', value: '2', color: 'var(--danger-color)' },
            { title: 'Purity Index', value: '99.2%', color: 'var(--success-color)' }
        ],
        chartData: {
            usage: {
                labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
                datasets: [
                    { label: 'Usage (ML/h)', data: [5, 4, 15, 12, 14, 18, 8], borderColor: '#00f2fe', tension: 0.4, fill: true, backgroundColor: 'rgba(0, 242, 254, 0.2)', borderWidth: 3 }
                ]
            }
        }
    });
});

router.get('/crime', (req, res) => {
    res.json({
        kpis: [
            { title: 'Reported Incidents (24h)', value: '12', color: 'var(--warning-color)' },
            { title: 'AI Patrol Optimization', value: 'Online', color: 'var(--success-color)' },
            { title: 'High Risk Zones', value: '2', color: 'var(--danger-color)' }
        ],
        chartData: {
            trend: {
                labels: ['North Dist', 'South Dist', 'East Dist', 'West Dist', 'Central'],
                datasets: [{
                    label: 'Reported Incidents (Last 30 Days)',
                    data: [45, 30, 25, 40, 85],
                    backgroundColor: '#ff0844',
                    borderRadius: 6
                }]
            }
        }
    });
});

module.exports = router;
