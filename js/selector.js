// ========================================
// SELECTOR DE FOTOS - XV AÑOS MARIANA & ARELI
// ========================================

const TOTAL_PHOTOS = 460;
const STORAGE_KEY = 'mariana_areli_xv_photo_selections';

// Lista completa de fotos
const photos = [
    'imagenes/DSC_5698.webp', 'imagenes/DSC_5702.webp', 'imagenes/DSC_5705.webp',
    'imagenes/DSC_5706.webp', 'imagenes/DSC_5708.webp', 'imagenes/DSC_5709.webp', 'imagenes/DSC_5710.webp',
    'imagenes/DSC_5711.webp', 'imagenes/DSC_5719.webp', 'imagenes/DSC_5721.webp', 'imagenes/DSC_5723.webp',
    'imagenes/DSC_5724.webp', 'imagenes/DSC_5725.webp', 'imagenes/DSC_5727.webp', 'imagenes/DSC_5729.webp',
    'imagenes/DSC_5730.webp', 'imagenes/DSC_5733.webp', 'imagenes/DSC_5739.webp', 'imagenes/DSC_5744.webp',
    'imagenes/DSC_5745.webp', 'imagenes/DSC_5746.webp', 'imagenes/DSC_5748.webp', 'imagenes/DSC_5749.webp',
    'imagenes/DSC_5751.webp', 'imagenes/DSC_5753.webp', 'imagenes/DSC_5754.webp', 'imagenes/DSC_5755.webp',
    'imagenes/DSC_5766.webp', 'imagenes/DSC_5770.webp', 'imagenes/DSC_5773.webp', 'imagenes/DSC_5776.webp',
    'imagenes/DSC_5778.webp', 'imagenes/DSC_5779.webp', 'imagenes/DSC_5784.webp', 'imagenes/DSC_5788.webp',
    'imagenes/DSC_5790.webp', 'imagenes/DSC_5795.webp', 'imagenes/DSC_5800.webp', 'imagenes/DSC_5801.webp',
    'imagenes/DSC_5803.webp', 'imagenes/DSC_5810.webp', 'imagenes/DSC_5811.webp', 'imagenes/DSC_5812.webp',
    'imagenes/DSC_5813.webp', 'imagenes/DSC_5814.webp', 'imagenes/DSC_5815.webp', 'imagenes/DSC_5816.webp',
    'imagenes/DSC_5817.webp', 'imagenes/DSC_5818.webp', 'imagenes/DSC_5820.webp', 'imagenes/DSC_5822.webp',
    'imagenes/DSC_5823.webp', 'imagenes/DSC_5825.webp', 'imagenes/DSC_5826.webp', 'imagenes/DSC_5830.webp',
    'imagenes/DSC_5831.webp', 'imagenes/DSC_5832.webp', 'imagenes/DSC_5833.webp', 'imagenes/DSC_5834.webp',
    'imagenes/DSC_5835.webp', 'imagenes/DSC_5836.webp', 'imagenes/DSC_5837.webp', 'imagenes/DSC_5838.webp',
    'imagenes/DSC_5839.webp', 'imagenes/DSC_5840.webp', 'imagenes/DSC_5841.webp', 'imagenes/DSC_5844.webp',
    'imagenes/DSC_5847.webp', 'imagenes/DSC_5849.webp', 'imagenes/DSC_5853.webp', 'imagenes/DSC_5856.webp',
    'imagenes/DSC_5859.webp', 'imagenes/DSC_5863.webp', 'imagenes/DSC_5864.webp', 'imagenes/DSC_5866.webp',
    'imagenes/DSC_5869.webp', 'imagenes/DSC_5870.webp', 'imagenes/DSC_5871.webp', 'imagenes/DSC_5872.webp',
    'imagenes/DSC_5873.webp', 'imagenes/DSC_5874.webp', 'imagenes/DSC_5876.webp', 'imagenes/DSC_5877.webp',
    'imagenes/DSC_5879.webp', 'imagenes/DSC_5882.webp', 'imagenes/DSC_5884.webp', 'imagenes/DSC_5886.webp',
    'imagenes/DSC_5887.webp', 'imagenes/DSC_5889.webp', 'imagenes/DSC_5892.webp', 'imagenes/DSC_5893.webp',
    'imagenes/DSC_5894.webp', 'imagenes/DSC_5895.webp', 'imagenes/DSC_5896.webp', 'imagenes/DSC_5897.webp',
    'imagenes/DSC_5898.webp', 'imagenes/DSC_5899.webp', 'imagenes/DSC_5900.webp', 'imagenes/DSC_5901.webp',
    'imagenes/DSC_5902.webp', 'imagenes/DSC_5903.webp', 'imagenes/DSC_5905.webp', 'imagenes/DSC_5907.webp',
    'imagenes/DSC_5908.webp', 'imagenes/DSC_5910.webp', 'imagenes/DSC_5914.webp', 'imagenes/DSC_5916.webp',
    'imagenes/DSC_5918.webp', 'imagenes/DSC_5921.webp', 'imagenes/DSC_5922.webp', 'imagenes/DSC_5924.webp',
    'imagenes/DSC_5925.webp', 'imagenes/DSC_5928.webp', 'imagenes/DSC_5930.webp', 'imagenes/DSC_5932.webp',
    'imagenes/DSC_5935.webp', 'imagenes/DSC_5937.webp', 'imagenes/DSC_5940.webp', 'imagenes/DSC_5942.webp',
    'imagenes/DSC_5944.webp', 'imagenes/DSC_5947.webp', 'imagenes/DSC_5949.webp', 'imagenes/DSC_5951.webp',
    'imagenes/DSC_5952.webp', 'imagenes/DSC_5954.webp', 'imagenes/DSC_5957.webp', 'imagenes/DSC_5959.webp',
    'imagenes/DSC_5961.webp', 'imagenes/DSC_5962.webp', 'imagenes/DSC_5965.webp', 'imagenes/DSC_5966.webp',
    'imagenes/DSC_5967.webp', 'imagenes/DSC_5969.webp', 'imagenes/DSC_5971.webp', 'imagenes/DSC_5974.webp',
    'imagenes/DSC_5977.webp', 'imagenes/DSC_5980.webp', 'imagenes/DSC_5982.webp', 'imagenes/DSC_5984.webp',
    'imagenes/DSC_5989.webp', 'imagenes/DSC_5998.webp', 'imagenes/DSC_6002.webp', 'imagenes/DSC_6006.webp',
    'imagenes/DSC_6010.webp', 'imagenes/DSC_6011.webp', 'imagenes/DSC_6012.webp', 'imagenes/DSC_6017.webp',
    'imagenes/DSC_6023.webp', 'imagenes/DSC_6025.webp', 'imagenes/DSC_6027.webp', 'imagenes/DSC_6029.webp',
    'imagenes/DSC_6047.webp', 'imagenes/DSC_6051.webp', 'imagenes/DSC_6056.webp', 'imagenes/DSC_6061.webp',
    'imagenes/DSC_6063.webp', 'imagenes/DSC_6068.webp', 'imagenes/DSC_6073.webp', 'imagenes/DSC_6074.webp',
    'imagenes/DSC_6075.webp', 'imagenes/DSC_6076.webp', 'imagenes/DSC_6078.webp', 'imagenes/DSC_6079.webp',
    'imagenes/DSC_6080.webp', 'imagenes/DSC_6081.webp', 'imagenes/DSC_6083.webp', 'imagenes/DSC_6086.webp',
    'imagenes/DSC_6088.webp', 'imagenes/DSC_6093.webp', 'imagenes/DSC_6094.webp', 'imagenes/DSC_6095.webp',
    'imagenes/DSC_6099.webp', 'imagenes/DSC_6101.webp', 'imagenes/DSC_6104.webp', 'imagenes/DSC_6105.webp',
    'imagenes/DSC_6106.webp', 'imagenes/DSC_6107.webp', 'imagenes/DSC_6108.webp', 'imagenes/DSC_6110.webp',
    'imagenes/DSC_6111.webp', 'imagenes/DSC_6112.webp', 'imagenes/DSC_6113.webp', 'imagenes/DSC_6114.webp',
    'imagenes/DSC_6118.webp', 'imagenes/DSC_6119.webp', 'imagenes/DSC_6120.webp', 'imagenes/DSC_6123.webp',
    'imagenes/DSC_6126.webp', 'imagenes/DSC_6127.webp', 'imagenes/DSC_6129.webp', 'imagenes/DSC_6132.webp',
    'imagenes/DSC_6133.webp', 'imagenes/DSC_6135.webp', 'imagenes/DSC_6136.webp', 'imagenes/DSC_6137.webp',
    'imagenes/DSC_6138.webp', 'imagenes/DSC_6139.webp', 'imagenes/DSC_6140.webp', 'imagenes/DSC_6141.webp',
    'imagenes/DSC_6142.webp', 'imagenes/DSC_6144.webp', 'imagenes/DSC_6145.webp', 'imagenes/DSC_6146.webp',
    'imagenes/DSC_6148.webp', 'imagenes/DSC_6149.webp', 'imagenes/DSC_6150.webp', 'imagenes/DSC_6151.webp',
    'imagenes/DSC_6153.webp', 'imagenes/DSC_6161.webp', 'imagenes/DSC_6162.webp', 'imagenes/DSC_6164.webp',
    'imagenes/DSC_6166.webp', 'imagenes/DSC_6167.webp', 'imagenes/DSC_6168.webp', 'imagenes/DSC_6169.webp',
    'imagenes/DSC_6170.webp', 'imagenes/DSC_6172.webp', 'imagenes/DSC_6174.webp', 'imagenes/DSC_6180.webp',
    'imagenes/DSC_6182.webp', 'imagenes/DSC_6184.webp', 'imagenes/DSC_6188.webp', 'imagenes/DSC_6190.webp',
    'imagenes/DSC_6191.webp', 'imagenes/DSC_6194.webp', 'imagenes/DSC_6195.webp', 'imagenes/DSC_6196.webp',
    'imagenes/DSC_6197.webp', 'imagenes/DSC_6200.webp', 'imagenes/DSC_6202.webp', 'imagenes/DSC_6205.webp',
    'imagenes/DSC_6207.webp', 'imagenes/DSC_6210.webp', 'imagenes/DSC_6213.webp', 'imagenes/DSC_6216.webp',
    'imagenes/DSC_6217.webp', 'imagenes/DSC_6221.webp', 'imagenes/DSC_6222.webp', 'imagenes/DSC_6227.webp',
    'imagenes/DSC_6230.webp', 'imagenes/DSC_6231.webp', 'imagenes/DSC_6235.webp', 'imagenes/DSC_6238.webp',
    'imagenes/DSC_6239.webp', 'imagenes/DSC_6240.webp', 'imagenes/DSC_6243.webp', 'imagenes/DSC_6248.webp',
    'imagenes/DSC_6252.webp', 'imagenes/DSC_6253.webp', 'imagenes/DSC_6256.webp', 'imagenes/DSC_6258.webp',
    'imagenes/DSC_6260.webp', 'imagenes/DSC_6263.webp', 'imagenes/DSC_6268.webp', 'imagenes/DSC_6271.webp',
    'imagenes/DSC_6272.webp', 'imagenes/DSC_6275.webp', 'imagenes/DSC_6279.webp', 'imagenes/DSC_6280.webp',
    'imagenes/DSC_6282.webp', 'imagenes/DSC_6284.webp', 'imagenes/DSC_6287.webp', 'imagenes/DSC_6291.webp',
    'imagenes/DSC_6292.webp', 'imagenes/DSC_6293.webp', 'imagenes/DSC_6294.webp', 'imagenes/DSC_6295.webp',
    'imagenes/DSC_6296.webp', 'imagenes/DSC_6297.webp', 'imagenes/DSC_6298.webp', 'imagenes/DSC_6300.webp',
    'imagenes/DSC_6301.webp', 'imagenes/DSC_6303.webp', 'imagenes/DSC_6305.webp', 'imagenes/DSC_6306.webp',
    'imagenes/DSC_6308.webp', 'imagenes/DSC_6310.webp', 'imagenes/DSC_6312.webp', 'imagenes/DSC_6314.webp',
    'imagenes/DSC_6315.webp', 'imagenes/DSC_6317.webp', 'imagenes/DSC_6319.webp', 'imagenes/DSC_6322.webp',
    'imagenes/DSC_6324.webp', 'imagenes/DSC_6326.webp', 'imagenes/DSC_6327.webp', 'imagenes/DSC_6330.webp',
    'imagenes/DSC_6332.webp', 'imagenes/DSC_6334.webp', 'imagenes/DSC_6336.webp', 'imagenes/DSC_6348.webp',
    'imagenes/DSC_6352.webp', 'imagenes/DSC_6353.webp', 'imagenes/DSC_6356.webp', 'imagenes/DSC_6362.webp',
    'imagenes/DSC_6363.webp', 'imagenes/DSC_6369.webp', 'imagenes/DSC_6373.webp', 'imagenes/DSC_6374.webp',
    'imagenes/DSC_6377.webp', 'imagenes/DSC_6387.webp', 'imagenes/DSC_6388.webp', 'imagenes/DSC_6390.webp',
    'imagenes/DSC_6391.webp', 'imagenes/DSC_6392.webp', 'imagenes/DSC_6395.webp', 'imagenes/DSC_6397.webp',
    'imagenes/DSC_6401.webp', 'imagenes/DSC_6402.webp', 'imagenes/DSC_6404.webp', 'imagenes/DSC_6407.webp',
    'imagenes/DSC_6412.webp', 'imagenes/DSC_6413.webp', 'imagenes/DSC_6415.webp', 'imagenes/DSC_6416.webp',
    'imagenes/DSC_6417.webp', 'imagenes/DSC_6419.webp', 'imagenes/DSC_6421.webp', 'imagenes/DSC_6428.webp',
    'imagenes/DSC_6443.webp', 'imagenes/DSC_6448.webp', 'imagenes/DSC_6451.webp', 'imagenes/DSC_6454.webp',
    'imagenes/DSC_6461.webp', 'imagenes/DSC_6462.webp', 'imagenes/DSC_6465.webp', 'imagenes/DSC_6466.webp',
    'imagenes/DSC_6468.webp', 'imagenes/DSC_6471.webp', 'imagenes/DSC_6472.webp', 'imagenes/DSC_6476.webp',
    'imagenes/DSC_6484.webp', 'imagenes/DSC_6485.webp', 'imagenes/DSC_6486.webp', 'imagenes/DSC_6491.webp',
    'imagenes/DSC_6494.webp', 'imagenes/DSC_6495.webp', 'imagenes/DSC_6496.webp', 'imagenes/DSC_6497.webp',
    'imagenes/DSC_6500.webp', 'imagenes/DSC_6501.webp', 'imagenes/DSC_6502.webp', 'imagenes/DSC_6504.webp',
    'imagenes/DSC_6505.webp', 'imagenes/DSC_6506.webp', 'imagenes/DSC_6509.webp', 'imagenes/DSC_6513.webp',
    'imagenes/DSC_6516.webp', 'imagenes/DSC_6518.webp', 'imagenes/DSC_6525.webp', 'imagenes/DSC_6546.webp',
    'imagenes/DSC_6547.webp', 'imagenes/DSC_6550.webp', 'imagenes/DSC_6556.webp', 'imagenes/DSC_6557.webp',
    'imagenes/DSC_6559.webp',
    'imagenes/IMG_5449.webp', 'imagenes/IMG_5450.webp', 'imagenes/IMG_5453.webp', 'imagenes/IMG_5454.webp',
    'imagenes/IMG_5459.webp', 'imagenes/IMG_5461.webp', 'imagenes/IMG_5462.webp', 'imagenes/IMG_5465.webp',
    'imagenes/IMG_5469.webp', 'imagenes/IMG_5471.webp', 'imagenes/IMG_5478.webp', 'imagenes/IMG_5481.webp',
    'imagenes/IMG_5482.webp', 'imagenes/IMG_5485.webp', 'imagenes/IMG_5486.webp', 'imagenes/IMG_5488.webp',
    'imagenes/IMG_5489.webp', 'imagenes/IMG_5493.webp', 'imagenes/IMG_5494.webp', 'imagenes/IMG_5495.webp',
    'imagenes/IMG_5498.webp', 'imagenes/IMG_5499.webp', 'imagenes/IMG_5502.webp', 'imagenes/IMG_5503.webp',
    'imagenes/IMG_5505.webp', 'imagenes/IMG_5506.webp', 'imagenes/IMG_5507.webp', 'imagenes/IMG_5509.webp',
    'imagenes/IMG_5511.webp', 'imagenes/IMG_5512.webp', 'imagenes/IMG_5513.webp', 'imagenes/IMG_5516.webp',
    'imagenes/IMG_5519.webp', 'imagenes/IMG_5522.webp', 'imagenes/IMG_5526.webp', 'imagenes/IMG_5532.webp',
    'imagenes/IMG_5539.webp', 'imagenes/IMG_5541.webp', 'imagenes/IMG_5544.webp', 'imagenes/IMG_5548.webp',
    'imagenes/IMG_5549.webp', 'imagenes/IMG_5551.webp', 'imagenes/IMG_5554.webp', 'imagenes/IMG_5555.webp',
    'imagenes/IMG_5558.webp', 'imagenes/IMG_5562.webp', 'imagenes/IMG_5565.webp', 'imagenes/IMG_5566.webp',
    'imagenes/IMG_5569.webp', 'imagenes/IMG_5571.webp', 'imagenes/IMG_5573.webp', 'imagenes/IMG_5574.webp',
    'imagenes/IMG_5578.webp', 'imagenes/IMG_5581.webp', 'imagenes/IMG_5584.webp', 'imagenes/IMG_5585.webp',
    'imagenes/IMG_5586.webp', 'imagenes/IMG_5588.webp', 'imagenes/IMG_5589.webp', 'imagenes/IMG_5591.webp',
    'imagenes/IMG_5592.webp', 'imagenes/IMG_5593.webp', 'imagenes/IMG_5595.webp', 'imagenes/IMG_5597.webp',
    'imagenes/IMG_5600.webp', 'imagenes/IMG_5602.webp', 'imagenes/IMG_5605.webp', 'imagenes/IMG_5606.webp',
    'imagenes/IMG_5608.webp', 'imagenes/IMG_5613.webp', 'imagenes/IMG_5616.webp', 'imagenes/IMG_5619.webp',
    'imagenes/IMG_5622.webp', 'imagenes/IMG_5631.webp', 'imagenes/IMG_5633.webp', 'imagenes/IMG_5634.webp',
    'imagenes/IMG_5635.webp', 'imagenes/IMG_5638.webp', 'imagenes/IMG_5639.webp', 'imagenes/IMG_5644.webp',
    'imagenes/IMG_5646.webp', 'imagenes/IMG_5650.webp', 'imagenes/IMG_5652.webp', 'imagenes/IMG_5659.webp',
    'imagenes/IMG_5663.webp', 'imagenes/IMG_5669.webp', 'imagenes/IMG_5673.webp', 'imagenes/IMG_5674.webp',
    'imagenes/IMG_5681.webp', 'imagenes/IMG_5691.webp', 'imagenes/IMG_5710.webp', 'imagenes/IMG_5717.webp',
    'imagenes/IMG_5718.webp', 'imagenes/IMG_5722.webp', 'imagenes/IMG_5725.webp', 'imagenes/IMG_5726.webp',
    'imagenes/IMG_5728.webp', 'imagenes/IMG_5730.webp', 'imagenes/IMG_5732.webp', 'imagenes/IMG_5734.webp',
    'imagenes/DJI_1100.webp', 'imagenes/DJI_1101.webp', 'imagenes/DJI_1102.webp', 'imagenes/DJI_1103.webp'
];

// LIMITS
const LIMITS = {
    impresion: 130
};

// Selecciones predefinidas de Lucy (índice = numero_foto - 1)
const DEFAULT_SELECTIONS = {};
[
    // 100 seleccionadas originalmente
    1,3,18,30,37,39,50,54,69,71,77,78,80,81,82,83,84,85,86,88,89,90,95,
    104,108,109,110,121,124,125,129,132,136,137,139,141,144,148,149,152,
    153,155,157,172,174,176,177,180,181,188,191,193,194,196,197,198,199,
    200,204,206,207,208,209,210,211,214,220,222,231,235,240,243,248,260,
    264,266,269,270,271,272,274,276,279,283,285,314,317,320,321,323,324,
    326,328,333,337,340,343,344,349,354,
    // 30 adicionales de Lucy (19 mar 2026)
    355,356,358,361,365,366,370,372,377,378,381,384,390,396,399,403,406,
    417,424,428,432,436,439,444,446,449,450,451,457,459
].forEach(n => {
    DEFAULT_SELECTIONS[n - 1] = { impresion: true, redes_sociales: false, invitaciones_web: false, descartada: false };
});

let photoSelections = {};
let currentPhotoIndex = null;
let currentFilter = 'all';

// ========================================
// LOCAL STORAGE FUNCTIONS
// ========================================
function loadSelections() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        photoSelections = Object.assign({}, DEFAULT_SELECTIONS, saved ? JSON.parse(saved) : {});
        console.log('Selecciones cargadas:', photoSelections);
    } catch (error) {
        console.error('Error cargando selecciones:', error);
        photoSelections = Object.assign({}, DEFAULT_SELECTIONS);
    }
}

function saveSelections() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(photoSelections));
        console.log('Selecciones guardadas');
    } catch (error) {
        console.error('Error guardando selecciones:', error);
        showToast('Error al guardar. Verifica el espacio del navegador.', 'error');
    }
}

function clearAllSelections() {
    if (confirm('¿Están seguras de que quieren borrar TODAS las selecciones? Esta acción no se puede deshacer.')) {
        photoSelections = {};
        saveSelections();
        renderGallery();
        updateStats();
        updateFilterButtons();
        showToast('Todas las selecciones han sido eliminadas', 'success');
    }
}

// ========================================
// STATS FUNCTIONS
// ========================================
function getStats() {
    const stats = {
        impresion: 0,
        redes_sociales: 0,
        invitaciones_web: 0,
        descartada: 0,
        sinClasificar: photos.length
    };

    Object.values(photoSelections).forEach(selection => {
        if (selection.impresion) stats.impresion++;
        if (selection.redes_sociales) stats.redes_sociales++;
        if (selection.invitaciones_web) stats.invitaciones_web++;
        if (selection.descartada) stats.descartada++;
    });

    stats.sinClasificar = photos.length - Object.keys(photoSelections).length;

    return stats;
}

function updateStats() {
    const stats = getStats();

    document.getElementById('countImpresion').textContent = stats.impresion;
    document.getElementById('countRedesSociales').textContent = stats.redes_sociales;
    document.getElementById('countInvitacionesWeb').textContent = stats.invitaciones_web;
    document.getElementById('countDescartada').textContent = stats.descartada;
    document.getElementById('countSinClasificar').textContent = stats.sinClasificar;
}

// ========================================
// GALLERY FUNCTIONS
// ========================================
function renderGallery() {
    const grid = document.getElementById('photosGrid');
    grid.innerHTML = '';

    photos.forEach((photo, index) => {
        const selection = photoSelections[index] || {};
        const hasAny = selection.impresion || selection.redes_sociales || selection.invitaciones_web || selection.descartada;

        const card = document.createElement('div');
        card.className = 'photo-card';
        card.dataset.index = index;

        let badgesHTML = '';
        if (hasAny || selection.rating) {
            badgesHTML = '<div class="photo-badges">';

            if (selection.rating && selection.rating > 0) {
                const stars = '★'.repeat(selection.rating);
                badgesHTML += `<span class="badge badge-rating"><i class="fas fa-star"></i> ${stars}</span>`;
            }

            if (selection.impresion) badgesHTML += '<span class="badge badge-impresion"><i class="fas fa-camera"></i> Impresión</span>';
            if (selection.redes_sociales) badgesHTML += '<span class="badge badge-redes-sociales"><i class="fas fa-share-alt"></i> Redes</span>';
            if (selection.invitaciones_web) badgesHTML += '<span class="badge badge-invitaciones-web"><i class="fas fa-globe"></i> Web</span>';
            if (selection.descartada) badgesHTML += '<span class="badge badge-descartada"><i class="fas fa-times-circle"></i> Descartada</span>';
            badgesHTML += '</div>';
        }

        card.innerHTML = `
            <img src="${photo}" alt="Foto ${index + 1}" loading="lazy">
            <div class="photo-number">Foto ${index + 1}</div>
            ${badgesHTML}
        `;

        card.addEventListener('click', () => openModal(index));
        grid.appendChild(card);
    });

    applyFilter();
}

// ========================================
// FILTER FUNCTIONS
// ========================================
function isPhotoVisible(index) {
    const selection = photoSelections[index] || {};
    let show = false;

    switch (currentFilter) {
        case 'all':
            show = true;
            break;
        case 'impresion':
            show = selection.impresion === true;
            break;
        case 'redes-sociales':
            show = selection.redes_sociales === true;
            break;
        case 'invitaciones-web':
            show = selection.invitaciones_web === true;
            break;
        case 'descartada':
            show = selection.descartada === true;
            break;
        case 'sin-clasificar':
            show = !selection.impresion && !selection.redes_sociales && !selection.invitaciones_web && !selection.descartada;
            break;
    }
    return show;
}

function applyFilter() {
    const cards = document.querySelectorAll('.photo-card');

    cards.forEach(card => {
        const index = parseInt(card.dataset.index);
        card.classList.toggle('hidden', !isPhotoVisible(index));
    });
}

function setFilter(filter) {
    currentFilter = filter;
    applyFilter();

    document.querySelectorAll('.btn-filter').forEach(btn => {
        btn.classList.remove('active');
    });

    const activeBtn = document.querySelector(`[data-filter="${filter}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

function updateFilterButtons() {
    const stats = getStats();

    document.getElementById('btnFilterAll').textContent = `Todas (${photos.length})`;
    document.getElementById('btnFilterImpresion').textContent = `Impresión (${stats.impresion})`;
    document.getElementById('btnFilterRedesSociales').textContent = `Redes Sociales (${stats.redes_sociales})`;
    document.getElementById('btnFilterInvitacionesWeb').textContent = `Invitaciones Web (${stats.invitaciones_web})`;
    document.getElementById('btnFilterDescartada').textContent = `Descartadas (${stats.descartada})`;
    document.getElementById('btnFilterSinClasificar').textContent = `Sin Clasificar (${stats.sinClasificar})`;
}

function findNextVisiblePhoto(startIndex, direction) {
    const totalPhotos = photos.length;

    if (direction === 'next') {
        for (let i = startIndex + 1; i < totalPhotos; i++) {
            if (isPhotoVisible(i)) return i;
        }
    } else {
        for (let i = startIndex - 1; i >= 0; i--) {
            if (isPhotoVisible(i)) return i;
        }
    }

    return null;
}

// ========================================
// MODAL FUNCTIONS
// ========================================
function openModal(index) {
    currentPhotoIndex = index;
    const modal = document.getElementById('photoModal');
    const modalImage = document.getElementById('modalImage');
    const modalPhotoNumber = document.getElementById('modalPhotoNumber');

    modalImage.src = photos[index];
    modalPhotoNumber.textContent = `Foto ${index + 1}`;

    const selection = photoSelections[index] || {};

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        btn.classList.toggle('selected', selection[category] === true);
    });

    updateStarDisplay(selection.rating || 0);
    updateNavigationButtons();

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Star rating functions
function updateStarDisplay(rating) {
    const stars = document.querySelectorAll('#starRating i');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.remove('far');
            star.classList.add('fas');
        } else {
            star.classList.remove('fas');
            star.classList.add('far');
        }
    });
}

function setupStarRating() {
    const starContainer = document.getElementById('starRating');
    if (!starContainer) return;

    const stars = starContainer.querySelectorAll('i');

    stars.forEach((star, index) => {
        star.addEventListener('click', (e) => {
            e.stopPropagation();
            const rating = index + 1;
            updateStarDisplay(rating);

            if (currentPhotoIndex !== null) {
                if (!photoSelections[currentPhotoIndex]) {
                    photoSelections[currentPhotoIndex] = {};
                }
                photoSelections[currentPhotoIndex].rating = rating;
            }
        });

        star.addEventListener('mouseenter', () => {
            stars.forEach((s, i) => {
                if (i <= index) {
                    s.style.filter = 'brightness(1.3)';
                }
            });
        });

        star.addEventListener('mouseleave', () => {
            stars.forEach(s => {
                s.style.filter = '';
            });
        });
    });
}

function updateNavigationButtons() {
    const btnPrev = document.getElementById('btnPrevPhoto');
    const btnNext = document.getElementById('btnNextPhoto');

    if (btnPrev && btnNext) {
        const prevIndex = findNextVisiblePhoto(currentPhotoIndex, 'prev');
        const nextIndex = findNextVisiblePhoto(currentPhotoIndex, 'next');

        btnPrev.disabled = prevIndex === null;
        btnPrev.style.opacity = prevIndex === null ? '0.3' : '1';
        btnPrev.style.cursor = prevIndex === null ? 'not-allowed' : 'pointer';

        btnNext.disabled = nextIndex === null;
        btnNext.style.opacity = nextIndex === null ? '0.3' : '1';
        btnNext.style.cursor = nextIndex === null ? 'not-allowed' : 'pointer';
    }
}

function navigatePhoto(direction) {
    if (currentPhotoIndex === null) return;

    const newIndex = findNextVisiblePhoto(currentPhotoIndex, direction);

    if (newIndex !== null) {
        currentPhotoIndex = newIndex;
        const modalImage = document.getElementById('modalImage');
        const modalPhotoNumber = document.getElementById('modalPhotoNumber');

        modalImage.src = photos[newIndex];
        modalPhotoNumber.textContent = `Foto ${newIndex + 1}`;

        const selection = photoSelections[newIndex] || {};
        document.querySelectorAll('.option-btn').forEach(btn => {
            const category = btn.dataset.category;
            btn.classList.toggle('selected', selection[category] === true);
        });

        updateStarDisplay(selection.rating || 0);
        updateNavigationButtons();
    }
}

function closeModal() {
    const modal = document.getElementById('photoModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    currentPhotoIndex = null;
}

function saveModalSelection() {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    let hasAnySelection = false;

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        const isSelected = btn.classList.contains('selected');
        selectedCategories[category] = isSelected;
        if (isSelected) hasAnySelection = true;
    });

    const currentRating = photoSelections[currentPhotoIndex]?.rating || 0;
    if (currentRating > 0) {
        selectedCategories.rating = currentRating;
        hasAnySelection = true;
    }

    if (hasAnySelection) {
        photoSelections[currentPhotoIndex] = selectedCategories;
    } else {
        delete photoSelections[currentPhotoIndex];
    }

    saveSelections();
    renderGallery();
    updateStats();
    updateFilterButtons();
    showToast('Selección guardada correctamente', 'success');
    closeModal();
}

// ========================================
// EXPORT FUNCTIONS
// ========================================
function exportToJSON() {
    const exportData = {
        fecha_exportacion: new Date().toISOString(),
        evento: 'XV Años - Mariana Odette & Areli Xiomara',
        total_fotos: photos.length,
        estadisticas: getStats(),
        selecciones: [],
        sugerencias_de_cambios: feedbackData.photos.length > 0 ? feedbackData.photos : 'Sin cambios sugeridos'
    };

    photos.forEach((photo, index) => {
        const selection = photoSelections[index];
        if (selection && (selection.impresion || selection.redes_sociales || selection.invitaciones_web || selection.descartada || selection.rating)) {
            exportData.selecciones.push({
                numero_foto: index + 1,
                archivo: photo,
                calificacion: selection.rating || 0,
                impresion: selection.impresion || false,
                redes_sociales: selection.redes_sociales || false,
                invitaciones_web: selection.invitaciones_web || false,
                descartada: selection.descartada || false
            });
        }
    });

    const jsonText = JSON.stringify(exportData, null, 2);
    const blob = new Blob([jsonText], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'seleccion-fotos-mariana-areli.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Reporte descargado. Envía el archivo por WhatsApp.', 'success');
}

function generateTextSummary() {
    const stats = getStats();
    let summary = '👑 SELECCIÓN DE FOTOS - XV AÑOS MARIANA & ARELI\n';
    summary += '═══════════════════════════════════════\n\n';
    summary += `📊 RESUMEN GENERAL:\n`;
    summary += `   Total de fotos: ${photos.length}\n`;
    summary += `   📸 Para impresión: ${stats.impresion}\n`;
    summary += `   📱 Para redes sociales: ${stats.redes_sociales}\n`;
    summary += `   🌐 Para invitaciones web: ${stats.invitaciones_web}\n`;
    summary += `   ❌ Descartadas: ${stats.descartada}\n`;
    summary += `   ⭕ Sin clasificar: ${stats.sinClasificar}\n\n`;

    const categories = ['impresion', 'redes_sociales', 'invitaciones_web', 'descartada'];
    const categoryNames = {
        impresion: '📸 IMPRESIÓN',
        redes_sociales: '📱 REDES SOCIALES',
        invitaciones_web: '🌐 INVITACIONES WEB',
        descartada: '❌ DESCARTADAS'
    };

    categories.forEach(category => {
        const photosInCategory = [];
        photos.forEach((photo, index) => {
            const selection = photoSelections[index];
            if (selection && selection[category]) {
                const rating = selection.rating ? ` (★${selection.rating})` : '';
                photosInCategory.push(`${index + 1}${rating}`);
            }
        });

        if (photosInCategory.length > 0) {
            summary += `${categoryNames[category]}:\n`;
            summary += `   Fotos: ${photosInCategory.join(', ')}\n`;
            summary += `   Total: ${photosInCategory.length}\n\n`;
        }
    });

    if (feedbackData.photos.length > 0) {
        summary += `\n💬 SUGERENCIAS DE CAMBIOS EN FOTOS:\n`;
        feedbackData.photos.forEach(item => {
            summary += `   📸 Foto #${item.photoNumber}: ${item.change}\n`;
        });
        summary += '\n';
    }

    summary += `\n📅 Generado el: ${new Date().toLocaleString('es-MX')}\n`;

    return summary;
}

function copyToClipboard() {
    const compact = { impresion: [], redes_sociales: [], invitaciones_web: [], descartada: [] };
    photos.forEach((_, index) => {
        const s = photoSelections[index];
        if (!s) return;
        if (s.impresion) compact.impresion.push(index + 1);
        if (s.redes_sociales) compact.redes_sociales.push(index + 1);
        if (s.invitaciones_web) compact.invitaciones_web.push(index + 1);
        if (s.descartada) compact.descartada.push(index + 1);
    });
    const text = JSON.stringify(compact);

    navigator.clipboard.writeText(text).then(() => {
        showToast('Selección copiada al portapapeles', 'success');
    }).catch(() => {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('Selección copiada al portapapeles', 'success');
    });
}

// ========================================
// TOAST NOTIFICATION
// ========================================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ========================================
// FEEDBACK MANAGEMENT
// ========================================
const FEEDBACK_KEY = 'mariana_areli_xv_feedback';
let feedbackData = {
    photos: []
};

function loadFeedback() {
    try {
        const saved = localStorage.getItem(FEEDBACK_KEY);
        if (saved) {
            feedbackData = JSON.parse(saved);
            renderFeedbackLists();
        }
    } catch (error) {
        console.error('Error loading feedback:', error);
    }
}

function saveFeedback() {
    try {
        localStorage.setItem(FEEDBACK_KEY, JSON.stringify(feedbackData));
    } catch (error) {
        console.error('Error saving feedback:', error);
    }
}

function addPhotoFeedback() {
    const photoNumber = document.getElementById('photoNumber').value.trim();
    const change = document.getElementById('photoChange').value.trim();

    if (!photoNumber || !change) {
        showToast('Por favor completa ambos campos', 'error');
        return;
    }

    if (photoNumber < 1 || photoNumber > TOTAL_PHOTOS) {
        showToast(`El número de foto debe estar entre 1 y ${TOTAL_PHOTOS}`, 'error');
        return;
    }

    feedbackData.photos.push({ photoNumber: parseInt(photoNumber), change });
    saveFeedback();
    renderFeedbackLists();

    document.getElementById('photoNumber').value = '';
    document.getElementById('photoChange').value = '';

    showToast('Sugerencia agregada', 'success');
}

function removePhotoFeedback(index) {
    feedbackData.photos.splice(index, 1);
    saveFeedback();
    renderFeedbackLists();
    showToast('Sugerencia eliminada', 'success');
}

function renderFeedbackLists() {
    const photoList = document.getElementById('photoFeedbackList');

    if (!photoList) return;

    if (feedbackData.photos.length === 0) {
        photoList.innerHTML = '<p style="color: rgba(245, 243, 255, 0.5); font-style: italic; margin: 10px 0; text-align: center;">No hay sugerencias de cambios</p>';
    } else {
        photoList.innerHTML = feedbackData.photos.map((item, index) => `
            <div style="display: flex; align-items: center; gap: 10px; padding: 12px; background: rgba(255, 255, 255, 0.08); border-radius: 10px; margin-bottom: 10px; border: 1px solid rgba(102, 126, 234, 0.3);">
                <span style="font-weight: 600; color: var(--primary-light); min-width: 70px; font-size: 1rem;"><i class="fas fa-camera"></i> #${item.photoNumber}</span>
                <span style="flex: 1; color: var(--cream); font-size: 0.95rem;">${item.change}</span>
                <button onclick="removePhotoFeedback(${index})" style="padding: 8px 12px; background: #f44336; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 0.85rem; transition: all 0.3s ease;" onmouseover="this.style.background='#d32f2f'" onmouseout="this.style.background='#f44336'"><i class="fas fa-trash-alt"></i></button>
            </div>
        `).join('');
    }
}

// ========================================
// EVENT LISTENERS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎬 Iniciando selector de fotos - Mariana & Areli XV Años');
    console.log(`📸 Total de fotos: ${TOTAL_PHOTOS}`);

    loadSelections();
    loadFeedback();
    renderGallery();
    updateStats();
    updateFilterButtons();

    // Filter buttons
    document.getElementById('btnFilterAll').addEventListener('click', () => setFilter('all'));
    document.getElementById('btnFilterImpresion').addEventListener('click', () => setFilter('impresion'));
    document.getElementById('btnFilterRedesSociales').addEventListener('click', () => setFilter('redes-sociales'));
    document.getElementById('btnFilterInvitacionesWeb').addEventListener('click', () => setFilter('invitaciones-web'));
    document.getElementById('btnFilterDescartada').addEventListener('click', () => setFilter('descartada'));
    document.getElementById('btnFilterSinClasificar').addEventListener('click', () => setFilter('sin-clasificar'));

    // Set data-filter attributes
    document.getElementById('btnFilterAll').dataset.filter = 'all';
    document.getElementById('btnFilterImpresion').dataset.filter = 'impresion';
    document.getElementById('btnFilterRedesSociales').dataset.filter = 'redes-sociales';
    document.getElementById('btnFilterInvitacionesWeb').dataset.filter = 'invitaciones-web';
    document.getElementById('btnFilterDescartada').dataset.filter = 'descartada';
    document.getElementById('btnFilterSinClasificar').dataset.filter = 'sin-clasificar';

    document.getElementById('btnFilterAll').classList.add('active');

    // Action buttons
    document.getElementById('btnExport').addEventListener('click', exportToJSON);
    document.getElementById('btnShare').addEventListener('click', copyToClipboard);
    document.getElementById('btnClear').addEventListener('click', clearAllSelections);

    // Modal controls
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('btnCancelSelection').addEventListener('click', closeModal);
    document.getElementById('btnSaveSelection').addEventListener('click', saveModalSelection);

    setupStarRating();

    // Option buttons
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            const isCurrentlySelected = btn.classList.contains('selected');

            if (category === 'descartada' && !isCurrentlySelected) {
                document.querySelectorAll('.option-btn').forEach(b => {
                    if (b !== btn) b.classList.remove('selected');
                });
            }

            if (category !== 'descartada' && !isCurrentlySelected) {
                const descartadaBtn = document.querySelector('.option-btn[data-category="descartada"]');
                if (descartadaBtn) descartadaBtn.classList.remove('selected');
            }

            if (category === 'impresion' && !isCurrentlySelected && getStats().impresion >= LIMITS.impresion) {
                showToast(`Ya tienes ${LIMITS.impresion} fotos para impresión (límite del paquete)`, 'error');
                return;
            }

            btn.classList.toggle('selected');
        });
    });

    // Close modal on outside click
    document.getElementById('photoModal').addEventListener('click', (e) => {
        if (e.target.id === 'photoModal') {
            closeModal();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('photoModal');
        if (modal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'Enter') {
                saveModalSelection();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                navigatePhoto('prev');
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                navigatePhoto('next');
            }
        }
    });

    // Navigation buttons
    document.getElementById('btnPrevPhoto').addEventListener('click', (e) => {
        e.stopPropagation();
        navigatePhoto('prev');
    });

    document.getElementById('btnNextPhoto').addEventListener('click', (e) => {
        e.stopPropagation();
        navigatePhoto('next');
    });

    console.log('✅ Selector de fotos inicializado');
});

// Auto-save
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        saveSelections();
    }
});

window.addEventListener('beforeunload', () => {
    saveSelections();
});
