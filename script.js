/**
 * City Website - Main JavaScript
 * タブ切り替えとスムーズなアニメーション機能
 */

(function() {
    'use strict';

    // ============================================
    // News タブ切り替え機能
    // ============================================
    function initNewsTabs() {
        const tabs = document.querySelectorAll('.news__tab');
        const newsItems = document.querySelectorAll('.news__item');

        if (!tabs.length || !newsItems.length) return;

        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const category = this.getAttribute('data-category');

                // アクティブタブの更新
                tabs.forEach(t => {
                    t.classList.remove('news__tab--active');
                    t.setAttribute('aria-selected', 'false');
                });
                this.classList.add('news__tab--active');
                this.setAttribute('aria-selected', 'true');

                // ニュースアイテムのフィルタリング
                newsItems.forEach(item => {
                    const itemCategory = item.getAttribute('data-category');
                    
                    if (category === 'all' || itemCategory === category) {
                        // フェードインアニメーション付きで表示
                        item.classList.remove('hidden');
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(10px)';
                        
                        setTimeout(() => {
                            item.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        // フェードアウトして非表示
                        item.style.transition = 'opacity 0.2s ease-out, transform 0.2s ease-out';
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(-10px)';
                        
                        setTimeout(() => {
                            item.classList.add('hidden');
                        }, 200);
                    }
                });
            });
        });
    }

    // ============================================
    // セクションのスクロールアニメーション
    // ============================================
    function initScrollAnimation() {
        const sections = document.querySelectorAll('section');
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -100px 0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    // 一度アニメーションしたら監視を停止（パフォーマンス向上）
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });
    }

    // ============================================
    // スムーズスクロール（アンカーリンク用）
    // ============================================
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#' || href === '') {
                    e.preventDefault();
                    return;
                }

                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ============================================
    // 画像の遅延読み込み補助（既存のloading="lazy"をサポート）
    // ============================================
    function initImageLoading() {
        // 遅延読み込み対応ブラウザでは自動で処理される
        // フォールバック処理は必要に応じて追加
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        if ('loading' in HTMLImageElement.prototype) {
            // ネイティブサポートあり
            return;
        }

        // フォールバック: Intersection Observerを使用
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                        }
                        observer.unobserve(img);
                    }
                });
            });

            images.forEach(img => {
                if (img.dataset.src) {
                    imageObserver.observe(img);
                }
            });
        }
    }

    // ============================================
    // 初期化
    // ============================================
    function init() {
        // DOMContentLoaded で初期化
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                initNewsTabs();
                initScrollAnimation();
                initSmoothScroll();
                initImageLoading();
            });
        } else {
            // 既に読み込み済みの場合
            initNewsTabs();
            initScrollAnimation();
            initSmoothScroll();
            initImageLoading();
        }
    }

    // 実行
    init();

    // ============================================
    // パフォーマンス最適化: リサイズイベントのデバウンス
    // ============================================
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // リサイズ後の処理があればここに記述
        }, 250);
    });

})();

