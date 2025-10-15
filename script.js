document.addEventListener('DOMContentLoaded', function() {
    window.scrollToSection = function(sectionId) {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    };
    
    // Bar Chart
    const barCtx = document.getElementById('salesBarChart').getContext('2d');
    const barChart = new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: ['September 2023', 'Oktober 2023', 'November 2023', 'Desember 2023'],
            datasets: [{
                label: 'Jumlah Penjualan (kg)',
                data: [400, 350, 450, 500],
                backgroundColor: ['#39FF14', '#8B0000', '#FFD700', '#39FF14'],
                borderColor: '#39FF14',
                borderWidth: 2
            }]
        },
        options: { responsive: true }
    });
    
    // Pie Chart Baru
    const pieCtx = document.getElementById('salesPieChart').getContext('2d');
    const pieChart = new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: ['September', 'Oktober', 'November', 'Desember'],
            datasets: [{
                label: 'Distribusi Penjualan (%)',
                data: [25, 20, 30, 25],  // Persentase dummy
                backgroundColor: ['#39FF14', '#8B0000', '#FFD700', '#39FF14']
            }]
        },
        options: { responsive: true }
    });
});
