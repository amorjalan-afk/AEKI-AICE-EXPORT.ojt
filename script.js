document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk scroll ke section
    window.scrollToSection = function(sectionId) {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    };
    
    // Script untuk membuat grafik penjualan
    const ctx = document.getElementById('salesChart').getContext('2d');
    const salesData = {
        labels: ['September 2023', 'Oktober 2023'],
        datasets: [{
            label: 'Jumlah Penjualan (kg)',
            data: [400, 350],
            backgroundColor: ['#4CAF50', '#8d6e63'],
            borderColor: '#4CAF50',
            borderWidth: 2,
            borderRadius: 5
        }]
    };
    
    const salesChart = new Chart(ctx, {
        type: 'bar',
        data: salesData,
        options: {
            responsive: true,
            animation: {
                duration: 1000, // Animasi grafik
                easing: 'easeInOutBounce'
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Jumlah (kg)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Bulan'
                    }
                }
            },
            plugins: {
                tooltip: {
                    backgroundColor: 'rgba(76, 175, 80, 0.8)'
                }
            }
        }
    });
});
