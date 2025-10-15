document.addEventListener('DOMContentLoaded', function() {
    window.scrollToSection = function(sectionId) {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    };
    
    const ctx = document.getElementById('salesChart').getContext('2d');
    const salesData = {
        labels: ['September 2023', 'Oktober 2023', 'November 2023', 'Desember 2023'],
        datasets: [{
            label: 'Jumlah Penjualan (kg)',
            data: [400, 350, 450, 500],
            backgroundColor: ['#2E7D32', '#C28E5D', '#FFA500', '#4CAF50'],
            borderColor: '#2E7D32',
            borderWidth: 2,
            borderRadius: 5
        }]
    };
    
    const salesChart = new Chart(ctx, {
        type: 'bar',
        data: salesData,
        options: {
            responsive: true,
            animation: { duration: 1000, easing: 'easeInOutBounce' },
            scales: { y: { beginAtZero: true, title: { display: true, text: 'Jumlah (kg)' } },
                     x: { title: { display: true, text: 'Bulan' } } },
            plugins: { tooltip: { backgroundColor: 'rgba(46, 125, 50, 0.8)' } }
        }
    });
});
