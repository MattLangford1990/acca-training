// ============================================
// ACCA DASHBOARD ENHANCEMENTS - FIXED VERSION
// Guaranteed working navigation and progress tracking
// ============================================

console.log('🚀 Loading ACCA Enhanced Dashboard...');

// Study Time Recommendations (in hours)
const STUDY_TIMES = {
    BT: { hours: 50, weeks: '6-8', level: 'knowledge' },
    MA: { hours: 50, weeks: '6-8', level: 'knowledge' },
    FA: { hours: 50, weeks: '6-8', level: 'knowledge' },
    LW: { hours: 80, weeks: '10-12', level: 'skills' },
    PM: { hours: 80, weeks: '10-12', level: 'skills' },
    TX: { hours: 80, weeks: '10-12', level: 'skills' },
    FR: { hours: 80, weeks: '10-12', level: 'skills' },
    AA: { hours: 80, weeks: '10-12', level: 'skills' },
    FM: { hours: 80, weeks: '10-12', level: 'skills' },
    SBL: { hours: 160, weeks: '16-20', level: 'professional' },
    SBR: { hours: 160, weeks: '16-20', level: 'professional' },
    AFM: { hours: 160, weeks: '16-20', level: 'professional' },
    APM: { hours: 160, weeks: '16-20', level: 'professional' }
};

// Resource Links per Module
const RESOURCES = {
    BT: [
        { name: 'OpenTuition BT Notes', url: 'https://opentuition.com/acca/bt/', type: 'Free' },
        { name: 'ACCA Global Resources', url: 'https://www.accaglobal.com', type: 'Official' },
        { name: 'AccountancyStudents Forum', url: 'https://www.accountancystudents.co.uk', type: 'Community' }
    ],
    MA: [
        { name: 'OpenTuition MA Course', url: 'https://opentuition.com/acca/ma/', type: 'Free' },
        { name: 'ACCA Study Hub', url: 'https://www.accaglobal.com', type: 'Official' },
        { name: 'YouTube MA Tutorials', url: 'https://youtube.com', type: 'Video' }
    ],
    FA: [
        { name: 'OpenTuition FA Notes', url: 'https://opentuition.com/acca/fa/', type: 'Free' },
        { name: 'ACCA Practice Platform', url: 'https://www.accaglobal.com', type: 'Official' },
        { name: 'FA Study Community', url: 'https://www.accountancystudents.co.uk', type: 'Community' }
    ],
    LW: [
        { name: 'OpenTuition LW Course', url: 'https://opentuition.com/acca/lw/', type: 'Free' },
        { name: 'ACCA LW Resources', url: 'https://www.accaglobal.com', type: 'Official' },
        { name: 'Law Study Group', url: 'https://www.accountancystudents.co.uk', type: 'Community' }
    ],
    PM: [
        { name: 'OpenTuition PM Course', url: 'https://opentuition.com/acca/pm/', type: 'Free' },
        { name: 'ACCA PM Hub', url: 'https://www.accaglobal.com', type: 'Official' },
        { name: 'PM Practice Tests', url: 'https://www.accountancystudents.co.uk', type: 'Practice' }
    ],
    TX: [
        { name: 'OpenTuition TX Notes', url: 'https://opentuition.com/acca/tx/', type: 'Free' },
        { name: 'ACCA Taxation Resources', url: 'https://www.accaglobal.com', type: 'Official' },
        { name: 'Tax Study Forum', url: 'https://www.accountancystudents.co.uk', type: 'Community' }
    ],
    FR: [
        { name: 'OpenTuition FR Course', url: 'https://opentuition.com/acca/fr/', type: 'Free' },
        { name: 'ACCA FR Resources', url: 'https://www.accaglobal.com', type: 'Official' },
        { name: 'IFRS Foundation', url: 'https://www.ifrs.org', type: 'Official' }
    ],
    AA: [
        { name: 'OpenTuition AA Notes', url: 'https://opentuition.com/acca/aa/', type: 'Free' },
        { name: 'ACCA Audit Hub', url: 'https://www.accaglobal.com', type: 'Official' },
        { name: 'Audit Study Community', url: 'https://www.accountancystudents.co.uk', type: 'Community' }
    ],
    FM: [
        { name: 'OpenTuition FM Course', url: 'https://opentuition.com/acca/fm/', type: 'Free' },
        { name: 'ACCA FM Resources', url: 'https://www.accaglobal.com', type: 'Official' },
        { name: 'Finance Study Group', url: 'https://www.accountancystudents.co.uk', type: 'Community' }
    ],
    SBL: [
        { name: 'OpenTuition SBL', url: 'https://opentuition.com/acca/sbl/', type: 'Free' },
        { name: 'ACCA SBL Resources', url: 'https://www.accaglobal.com', type: 'Official' },
        { name: 'Strategic Leadership Forum', url: 'https://www.accountancystudents.co.uk', type: 'Community' }
    ],
    SBR: [
        { name: 'OpenTuition SBR', url: 'https://opentuition.com/acca/sbr/', type: 'Free' },
        { name: 'ACCA SBR Hub', url: 'https://www.accaglobal.com', type: 'Official' },
        { name: 'IFRS Updates', url: 'https://www.ifrs.org', type: 'Official' }
    ],
    AFM: [
        { name: 'OpenTuition AFM', url: 'https://opentuition.com/acca/afm/', type: 'Free' },
        { name: 'ACCA AFM Resources', url: 'https://www.accaglobal.com', type: 'Official' },
        { name: 'Advanced Finance Forum', url: 'https://www.accountancystudents.co.uk', type: 'Community' }
    ],
    APM: [
        { name: 'OpenTuition APM', url: 'https://opentuition.com/acca/apm/', type: 'Free' },
        { name: 'ACCA APM Hub', url: 'https://www.accaglobal.com', type: 'Official' },
        { name: 'Performance Management Community', url: 'https://www.accountancystudents.co.uk', type: 'Community' }
    ]
};

// Current active tab
let currentTab = 'progress';

// Inject Enhanced Styles
function injectEnhancedStyles() {
    const style = document.createElement('style');
    style.id = 'enhanced-dashboard-styles';
    style.textContent = `
        .overview-stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 40px;
        }
        .stat-card-large {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            border-radius: 15px;
            text-align: center;
            box-shadow: 0 8px 20px rgba(0,0,0,0.15);
            transition: transform 0.3s;
        }
        .stat-card-large:hover { transform: translateY(-5px); }
        .stat-icon { font-size: 36px; margin-bottom: 10px; }
        .stat-value-large { font-size: 48px; font-weight: bold; margin: 10px 0; }
        .stat-label { font-size: 14px; opacity: 0.9; text-transform: uppercase; letter-spacing: 1px; }
        .tracker-section {
            background: white;
            border-radius: 15px;
            padding: 30px;
            margin-bottom: 30px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        .tracker-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 25px;
            padding-bottom: 15px;
            border-bottom: 2px solid #f8f9fa;
        }
        .tracker-title { font-size: 24px; color: #003366; font-weight: bold; }
        .tracker-overall { font-size: 18px; color: #667eea; font-weight: 600; }
        .level-progress-row {
            margin-bottom: 30px;
            padding: 20px;
            background: #f8f9fa;
            border-radius: 12px;
        }
        .level-row-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
        }
        .level-row-title {
            font-size: 18px;
            font-weight: 600;
            color: #333;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .level-row-percent { font-size: 24px; font-weight: bold; color: #667eea; }
        .progress-bar-container {
            background: #e9ecef;
            height: 12px;
            border-radius: 6px;
            overflow: hidden;
            margin-bottom: 15px;
        }
        .progress-bar-fill {
            height: 100%;
            background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
            transition: width 0.5s ease;
            border-radius: 6px;
        }
        .module-mini-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            gap: 10px;
        }
        .module-mini-card {
            background: white;
            padding: 15px;
            border-radius: 8px;
            text-align: center;
            border: 2px solid #dee2e6;
            transition: all 0.3s;
            cursor: pointer;
        }
        .module-mini-card:hover { border-color: #0066cc; transform: translateY(-2px); }
        .module-mini-card.completed { border-color: #28a745; background: #d4edda; }
        .module-mini-card.in-progress { border-color: #ffc107; background: #fff3cd; }
        .module-mini-card.not-started { border-color: #dee2e6; background: white; }
        .module-mini-code { font-weight: bold; font-size: 16px; margin-bottom: 5px; }
        .module-mini-score { font-size: 20px; font-weight: bold; color: #667eea; }
        .module-mini-status { font-size: 12px; margin-top: 5px; color: #666; }
        .study-time-section {
            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
            color: white;
            padding: 25px;
            border-radius: 12px;
            margin-bottom: 30px;
        }
        .study-time-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }
        .study-time-card {
            background: rgba(255,255,255,0.2);
            backdrop-filter: blur(10px);
            padding: 20px;
            border-radius: 10px;
            text-align: center;
        }
        .study-time-hours { font-size: 32px; font-weight: bold; margin: 10px 0; }
        .study-time-label { font-size: 14px; opacity: 0.9; }
        .module-card-enhanced {
            background: white;
            border-radius: 12px;
            padding: 25px;
            margin-bottom: 20px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            border-left: 5px solid #667eea;
        }
        .module-card-header {
            display: flex;
            justify-content: space-between;
            align-items: start;
            margin-bottom: 20px;
        }
        .module-info { flex: 1; }
        .module-main-title { font-size: 22px; font-weight: bold; color: #003366; margin-bottom: 5px; }
        .module-code-badge {
            display: inline-block;
            padding: 4px 12px;
            background: #f8f9fa;
            border-radius: 4px;
            font-size: 13px;
            color: #666;
            font-weight: 500;
        }
        .module-score-display { text-align: right; }
        .score-big { font-size: 36px; font-weight: bold; color: #28a745; }
        .score-label { font-size: 12px; color: #666; }
        .module-stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 15px;
            margin: 20px 0;
        }
        .module-stat-item { text-align: center; padding: 10px; background: #f8f9fa; border-radius: 8px; }
        .module-stat-value { font-size: 20px; font-weight: bold; color: #667eea; }
        .module-stat-label { font-size: 12px; color: #666; margin-top: 5px; }
        .resources-section {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 2px solid #f8f9fa;
        }
        .resources-title {
            font-size: 16px;
            font-weight: 600;
            color: #333;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .resource-links { display: flex; flex-direction: column; gap: 8px; }
        .resource-link {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 15px;
            background: #f8f9fa;
            border-radius: 6px;
            text-decoration: none;
            color: #333;
            transition: all 0.3s;
            border: 1px solid #dee2e6;
        }
        .resource-link:hover {
            background: #e3f2fd;
            border-color: #0066cc;
            transform: translateX(5px);
        }
        .resource-name { font-weight: 500; }
        .resource-type {
            padding: 3px 10px;
            background: #0066cc;
            color: white;
            border-radius: 12px;
            font-size: 11px;
            font-weight: 600;
        }
        @media (max-width: 768px) {
            .overview-stats { grid-template-columns: repeat(2, 1fr); }
            .stat-value-large { font-size: 36px; }
            .module-stats-grid { grid-template-columns: repeat(2, 1fr); }
            .study-time-grid { grid-template-columns: 1fr; }
        }
    `;
    document.head.appendChild(style);
    console.log('✅ Enhanced styles injected');
}

// Render Enhanced Progress Dashboard
function renderProgressDashboard() {
    console.log('📊 Rendering Progress Dashboard...');
    
    const container = document.getElementById('moduleContent');
    if (!container) {
        console.error('❌ moduleContent not found!');
        return;
    }
    
    const user = window.getCurrentUser();
    if (!user) {
        console.error('❌ No user found!');
        return;
    }
    
    const history = JSON.parse(localStorage.getItem('acca_history') || '[]').filter(h => h.userId === user.id);
    
    const totalModules = 13;
    const attemptedModules = new Set(history.map(h => h.module)).size;
    const avgScore = history.length > 0 ? 
        Math.round(history.reduce((sum, h) => sum + h.score, 0) / history.length) : 0;
    const passedModules = Object.keys(window.MODULES).filter(code => {
        const moduleHistory = history.filter(h => h.module === code);
        return moduleHistory.length > 0 && Math.max(...moduleHistory.map(h => h.score)) >= 50;
    }).length;
    
    const totalMinutes = history.length * 10;
    const totalHours = Math.round(totalMinutes / 60);
    
    container.innerHTML = `
        <div class="overview-stats">
            <div class="stat-card-large">
                <div class="stat-icon">📚</div>
                <div class="stat-value-large">${totalModules}</div>
                <div class="stat-label">Total Modules</div>
            </div>
            <div class="stat-card-large">
                <div class="stat-icon">⏱️</div>
                <div class="stat-value-large">${totalHours}h</div>
                <div class="stat-label">Study Time</div>
            </div>
            <div class="stat-card-large">
                <div class="stat-icon">📈</div>
                <div class="stat-value-large">${avgScore}%</div>
                <div class="stat-label">Average Score</div>
            </div>
            <div class="stat-card-large">
                <div class="stat-icon">🎯</div>
                <div class="stat-value-large">${passedModules}/${totalModules}</div>
                <div class="stat-label">Passed</div>
            </div>
        </div>
        
        <div class="tracker-section">
            <div class="tracker-header">
                <h2 class="tracker-title">Your ACCA Journey Progress</h2>
                <div class="tracker-overall">${Math.round((passedModules/totalModules)*100)}% Complete</div>
            </div>
            ${renderLevelProgress('knowledge', 'Applied Knowledge', '📚', history)}
            ${renderLevelProgress('skills', 'Applied Skills', '📊', history)}
            ${renderLevelProgress('professional', 'Strategic Professional', '🎯', history)}
        </div>
        
        <div class="study-time-section">
            <h3>📅 Recommended Study Time</h3>
            <div class="study-time-grid">
                <div class="study-time-card">
                    <div class="study-time-label">Applied Knowledge</div>
                    <div class="study-time-hours">150h</div>
                    <div class="study-time-label">50h per module</div>
                </div>
                <div class="study-time-card">
                    <div class="study-time-label">Applied Skills</div>
                    <div class="study-time-hours">480h</div>
                    <div class="study-time-label">80h per module</div>
                </div>
                <div class="study-time-card">
                    <div class="study-time-label">Strategic Professional</div>
                    <div class="study-time-hours">640h</div>
                    <div class="study-time-label">160h per module</div>
                </div>
                <div class="study-time-card">
                    <div class="study-time-label">Total ACCA</div>
                    <div class="study-time-hours">1,270h</div>
                    <div class="study-time-label">Full qualification</div>
                </div>
            </div>
        </div>
        
        <h2 style="margin: 30px 0 20px 0; color: #003366;">Module Details & Resources</h2>
        ${renderDetailedModuleCards(history)}
    `;
    
    console.log('✅ Progress Dashboard rendered');
}

// Render Level Progress
function renderLevelProgress(level, title, icon, history) {
    const modules = Object.keys(window.MODULES).filter(code => window.MODULES[code].level === level);
    const moduleScores = modules.map(code => {
        const moduleHistory = history.filter(h => h.module === code);
        return moduleHistory.length > 0 ? Math.max(...moduleHistory.map(h => h.score)) : 0;
    });
    const levelAvg = moduleScores.length > 0 ? 
        Math.round(moduleScores.reduce((a,b) => a+b, 0) / moduleScores.length) : 0;
    
    const miniCards = modules.map(code => {
        const moduleHistory = history.filter(h => h.module === code);
        const bestScore = moduleHistory.length > 0 ? Math.max(...moduleHistory.map(h => h.score)) : 0;
        let status = 'not-started';
        let statusText = 'Not Started';
        if (bestScore >= 50) {
            status = 'completed';
            statusText = '✅ Passed';
        } else if (bestScore > 0) {
            status = 'in-progress';
            statusText = '⏳ In Progress';
        } else {
            statusText = '⚪ Not Started';
        }
        
        return `
            <div class="module-mini-card ${status}" onclick="openModule('${code}')">
                <div class="module-mini-code">${code}</div>
                <div class="module-mini-score">${bestScore}%</div>
                <div class="module-mini-status">${statusText}</div>
            </div>
        `;
    }).join('');
    
    return `
        <div class="level-progress-row">
            <div class="level-row-header">
                <div class="level-row-title">
                    <span>${icon}</span>
                    <span>${title}</span>
                </div>
                <div class="level-row-percent">${levelAvg}%</div>
            </div>
            <div class="progress-bar-container">
                <div class="progress-bar-fill" style="width: ${levelAvg}%"></div>
            </div>
            <div class="module-mini-grid">
                ${miniCards}
            </div>
        </div>
    `;
}

// Render Detailed Module Cards
function renderDetailedModuleCards(history) {
    return Object.keys(window.MODULES).map(code => {
        const mod = window.MODULES[code];
        const moduleHistory = history.filter(h => h.module === code);
        const attempts = moduleHistory.length;
        const bestScore = attempts > 0 ? Math.max(...moduleHistory.map(h => h.score)) : 0;
        const avgScore = attempts > 0 ? 
            Math.round(moduleHistory.reduce((sum, h) => sum + h.score, 0) / attempts) : 0;
        const studyTime = STUDY_TIMES[code];
        const resources = RESOURCES[code] || [];
        
        return `
            <div class="module-card-enhanced">
                <div class="module-card-header">
                    <div class="module-info">
                        <div class="module-main-title">${mod.name}</div>
                        <span class="module-code-badge">${mod.code}</span>
                        <p style="margin-top: 10px; color: #666;">${mod.desc}</p>
                    </div>
                    <div class="module-score-display">
                        <div class="score-big">${bestScore}%</div>
                        <div class="score-label">Best Score</div>
                    </div>
                </div>
                
                <div class="module-stats-grid">
                    <div class="module-stat-item">
                        <div class="module-stat-value">${attempts}</div>
                        <div class="module-stat-label">Attempts</div>
                    </div>
                    <div class="module-stat-item">
                        <div class="module-stat-value">${avgScore}%</div>
                        <div class="module-stat-label">Average</div>
                    </div>
                    <div class="module-stat-item">
                        <div class="module-stat-value">${studyTime.hours}h</div>
                        <div class="module-stat-label">Recommended</div>
                    </div>
                    <div class="module-stat-item">
                        <div class="module-stat-value">${studyTime.weeks}</div>
                        <div class="module-stat-label">Weeks</div>
                    </div>
                </div>
                
                <div class="resources-section">
                    <div class="resources-title">📚 Study Resources</div>
                    <div class="resource-links">
                        ${resources.map(res => `
                            <a href="${res.url}" target="_blank" class="resource-link">
                                <span class="resource-name">${res.name}</span>
                                <span class="resource-type">${res.type}</span>
                            </a>
                        `).join('')}
                    </div>
                </div>
                
                <button class="start-btn" style="width: 100%; margin-top: 20px;" onclick="openModule('${code}')">
                    ${bestScore >= 50 ? 'Practice More' : 'Start Practice'}
                </button>
            </div>
        `;
    }).join('');
}

// Switch Dashboard Tab
function switchTab(tabName) {
    console.log('🔄 Switching to tab:', tabName);
    currentTab = tabName;
    
    // Update nav active state
    const navLinks = document.querySelectorAll('#studentDashboard .nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkText = link.textContent.trim().toLowerCase();
        if (linkText === tabName.toLowerCase()) {
            link.classList.add('active');
        }
    });
    
    // Render appropriate content
    if (tabName === 'progress') {
        renderProgressDashboard();
    } else if (tabName === 'modules') {
        if (typeof window.renderModuleGrid === 'function') {
            window.renderModuleGrid();
        } else {
            console.error('❌ renderModuleGrid function not found!');
        }
    }
}

// Setup Navigation
function setupNavigation() {
    console.log('🔧 Setting up navigation...');
    
    const navLinks = document.querySelector('#studentDashboard .nav-links');
    if (!navLinks) {
        console.error('❌ nav-links not found!');
        return;
    }
    
    // Create new navigation
    navLinks.innerHTML = `
        <div class="nav-link active" data-tab="progress">Progress</div>
        <div class="nav-link" data-tab="modules">Modules</div>
    `;
    
    // Add click listeners
    const links = navLinks.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const tab = this.getAttribute('data-tab');
            console.log('🖱️ Tab clicked:', tab);
            switchTab(tab);
        });
    });
    
    console.log('✅ Navigation setup complete');
}

// Initialize Dashboard
function initDashboard() {
    console.log('🚀 Initializing Enhanced Dashboard...');
    
    // Inject styles
    injectEnhancedStyles();
    
    // Override showStudentDashboard
    if (typeof window.showStudentDashboard !== 'undefined') {
        const originalShow = window.showStudentDashboard;
        window.showStudentDashboard = function() {
            console.log('📱 showStudentDashboard called');
            originalShow();
            setTimeout(() => {
                setupNavigation();
                switchTab('progress');
            }, 100);
        };
        console.log('✅ showStudentDashboard overridden');
    }
    
    // Setup navigation if already on student dashboard
    setTimeout(() => {
        const dashboard = document.getElementById('studentDashboard');
        if (dashboard && !dashboard.classList.contains('hidden')) {
            setupNavigation();
            switchTab('progress');
        }
    }, 200);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDashboard);
} else {
    initDashboard();
}

console.log('✅ ACCA Enhanced Dashboard loaded successfully!');
