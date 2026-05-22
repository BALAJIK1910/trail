(function () {
    const STEP_KEY = 'trail-progress';
    const VALID_PAGES = new Set([
        'start.html',
        'middle.html',
        'trail3.html',
        'trail4.html',
        'trail5.html',
        'trail6.html',
        'trail7.html',
        'trail8.html',
        'trail9.html',
        'trail10.html',
        'trail11.html',
        'trail12.html',
        'end.html',
        'deadend1.html',
        'deadend2.html',
    ]);

    const normalizePage = (input) => {
        const path = new URL(input, window.location.href).pathname;
        const page = path.substring(path.lastIndexOf('/') + 1);
        return page || 'index.html';
    };

    const currentPage = normalizePage(window.location.href);

    if (!VALID_PAGES.has(currentPage)) {
        return;
    }

    if (window.sessionStorage.getItem(STEP_KEY) !== currentPage) {
        window.sessionStorage.removeItem(STEP_KEY);
        window.location.replace('/');
        return;
    }

    const anchors = Array.from(document.querySelectorAll('a[href]'));

    for (const anchor of anchors) {
        const href = anchor.getAttribute('href');
        if (!href || href.startsWith('#') || href.startsWith('javascript:')) {
            continue;
        }

        let targetPage;
        try {
            targetPage = normalizePage(href);
        } catch {
            continue;
        }

        if (!VALID_PAGES.has(targetPage)) {
            continue;
        }

        anchor.addEventListener('click', () => {
            window.sessionStorage.setItem(STEP_KEY, targetPage);
        });
    }
})();