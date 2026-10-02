// Tailwind CDN config: must run right after the CDN script, before the page renders.
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
        math: ['Cambria Math', 'STIX Two Math', 'KaTeX_Math', 'Georgia', 'Times New Roman', 'serif']
      },
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca'
        }
      }
    }
  }
};

// Greek Alphabet Data (24 letters + variants)
const greekData = [
  { name: "Alpha", category: "greek", lower: "α", upper: "Α", latexLower: "\\alpha", latexUpper: "A", upperIsLatin: true, htmlLower: "&alpha;", htmlUpper: "&Alpha;", unicodeLower: "U+03B1", unicodeUpper: "U+0391", desc: "Angles, angular acceleration, statistical significance (p-value)" },
  { name: "Beta", category: "greek", lower: "β", upper: "Β", latexLower: "\\beta", latexUpper: "B", upperIsLatin: true, htmlLower: "&beta;", htmlUpper: "&Beta;", unicodeLower: "U+03B2", unicodeUpper: "U+0392", desc: "Regression coefficients, Beta function, normalized relativistic velocity (v/c)" },
  { name: "Gamma", category: "greek", lower: "γ", upper: "Γ", latexLower: "\\gamma", latexUpper: "\\Gamma", upperIsLatin: false, htmlLower: "&gamma;", htmlUpper: "&Gamma;", unicodeLower: "U+03B3", unicodeUpper: "U+0393", desc: "Lorentz factor in special relativity, Gamma function, photon notation" },
  { name: "Delta", category: "greek", lower: "δ", upper: "Δ", latexLower: "\\delta", latexUpper: "\\Delta", upperIsLatin: false, htmlLower: "&delta;", htmlUpper: "&Delta;", unicodeLower: "U+03B4", unicodeUpper: "U+0394", desc: "Dirac delta function, finite increments / differences, polynomial discriminant" },
  { name: "Epsilon", category: "greek", lower: "ε", upper: "Ε", variant: "ϵ", latexLower: "\\varepsilon", latexVariant: "\\epsilon", latexUpper: "E", upperIsLatin: true, htmlLower: "&epsilon;", htmlUpper: "&Epsilon;", unicodeLower: "U+03B5", unicodeUpper: "U+0395", desc: "Infinitesimal quantities (limits), dielectric permittivity, machine precision" },
  { name: "Zeta", category: "greek", lower: "ζ", upper: "Ζ", latexLower: "\\zeta", latexUpper: "Z", upperIsLatin: true, htmlLower: "&zeta;", htmlUpper: "&Zeta;", unicodeLower: "U+03B6", unicodeUpper: "U+0396", desc: "Riemann zeta function, damping ratio in harmonic oscillators" },
  { name: "Eta", category: "greek", lower: "η", upper: "Η", latexLower: "\\eta", latexUpper: "H", upperIsLatin: true, htmlLower: "&eta;", htmlUpper: "&Eta;", unicodeLower: "U+03B7", unicodeUpper: "U+0397", desc: "Thermodynamic efficiency, dynamic viscosity, Minkowski spacetime metric" },
  { name: "Theta", category: "greek", lower: "θ", upper: "Θ", variant: "ϑ", latexLower: "\\theta", latexVariant: "\\vartheta", latexUpper: "\\Theta", upperIsLatin: false, htmlLower: "&theta;", htmlUpper: "&Theta;", unicodeLower: "U+03B8", unicodeUpper: "U+0398", desc: "Planar and polar angles, spherical coordinates, asymptotic tight bound (Big-Θ)" },
  { name: "Iota", category: "greek", lower: "ι", upper: "Ι", latexLower: "\\iota", latexUpper: "I", upperIsLatin: true, htmlLower: "&iota;", htmlUpper: "&Iota;", unicodeLower: "U+03B9", unicodeUpper: "U+0399", desc: "Inclusion map, unit vector indexing, negligible quantities" },
  { name: "Kappa", category: "greek", lower: "κ", upper: "Κ", variant: "ϰ", latexLower: "\\kappa", latexVariant: "\\varkappa", latexUpper: "K", upperIsLatin: true, htmlLower: "&kappa;", htmlUpper: "&Kappa;", unicodeLower: "U+03BA", unicodeUpper: "U+039A", desc: "Differential curvature, condition number of matrices, compressibility index" },
  { name: "Lambda", category: "greek", lower: "λ", upper: "Λ", latexLower: "\\lambda", latexUpper: "\\Lambda", upperIsLatin: false, htmlLower: "&lambda;", htmlUpper: "&Lambda;", unicodeLower: "U+03BB", unicodeUpper: "U+039B", desc: "Wavelength, matrix eigenvalues, cosmological constant, lambda calculus" },
  { name: "Mu", category: "greek", lower: "μ", upper: "Μ", latexLower: "\\mu", latexUpper: "M", upperIsLatin: true, htmlLower: "&mu;", htmlUpper: "&Mu;", unicodeLower: "U+03BC", unicodeUpper: "U+039C", desc: "Population mean, friction coefficient, SI micro prefix (µ), magnetic permeability" },
  { name: "Nu", category: "greek", lower: "ν", upper: "Ν", latexLower: "\\nu", latexUpper: "N", upperIsLatin: true, htmlLower: "&nu;", htmlUpper: "&Nu;", unicodeLower: "U+03BD", unicodeUpper: "U+039D", desc: "Wave frequency, kinematic viscosity, degrees of freedom, neutrino symbol" },
  { name: "Xi", category: "greek", lower: "ξ", upper: "Ξ", latexLower: "\\xi", latexUpper: "\\Xi", upperIsLatin: false, htmlLower: "&xi;", htmlUpper: "&Xi;", unicodeLower: "U+03BE", unicodeUpper: "U+039E", desc: "Random variables, Riemann xi function, microstates in statistical physics" },
  { name: "Omicron", category: "greek", lower: "ο", upper: "Ο", latexLower: "o", latexUpper: "O", upperIsLatin: true, htmlLower: "&omicron;", htmlUpper: "&Omicron;", unicodeLower: "U+03BF", unicodeUpper: "U+039F", desc: "Small-o asymptotic notation, visually identical to Latin letter O" },
  { name: "Pi", category: "greek", lower: "π", upper: "Π", variant: "ϖ", latexLower: "\\pi", latexVariant: "\\varpi", latexUpper: "\\Pi", upperIsLatin: false, htmlLower: "&pi;", htmlUpper: "&Pi;", unicodeLower: "U+03C0", unicodeUpper: "U+03A0", desc: "Circle circumference-to-diameter ratio (3.14159...), product operator (Π)" },
  { name: "Rho", category: "greek", lower: "ρ", upper: "Ρ", variant: "ϱ", latexLower: "\\rho", latexVariant: "\\varrho", latexUpper: "P", upperIsLatin: true, htmlLower: "&rho;", htmlUpper: "&Rho;", unicodeLower: "U+03C1", unicodeUpper: "U+03A1", desc: "Mass and charge density, resistivity, spectral radius, Spearman correlation" },
  { name: "Sigma", category: "greek", lower: "σ", upper: "Σ", variant: "ς", latexLower: "\\sigma", latexVariant: "\\varsigma", latexUpper: "\\Sigma", upperIsLatin: false, htmlLower: "&sigma;", htmlUpper: "&Sigma;", unicodeLower: "U+03C3", unicodeUpper: "U+03A3", desc: "Standard deviation, surface charge density, summation operator (Σ)" },
  { name: "Tau", category: "greek", lower: "τ", upper: "Τ", latexLower: "\\tau", latexUpper: "T", upperIsLatin: true, htmlLower: "&tau;", htmlUpper: "&Tau;", unicodeLower: "U+03C4", unicodeUpper: "U+03A4", desc: "Time constant, mechanical shear stress, torque, circle constant 2π" },
  { name: "Upsilon", category: "greek", lower: "υ", upper: "Υ", latexLower: "\\upsilon", latexUpper: "\\Upsilon", upperIsLatin: false, htmlLower: "&upsilon;", htmlUpper: "&Upsilon;", unicodeLower: "U+03C5", unicodeUpper: "U+03A5", desc: "Upsilon subatomic meson, mass-to-light ratio in astrophysics" },
  { name: "Phi", category: "greek", lower: "φ", upper: "Φ", variant: "ϕ", latexLower: "\\varphi", latexVariant: "\\phi", latexUpper: "\\Phi", upperIsLatin: false, htmlLower: "&phi;", htmlUpper: "&Phi;", unicodeLower: "U+03C6", unicodeUpper: "U+03A6", desc: "Golden ratio (1.618...), magnetic / electric flux, Euler's totient function" },
  { name: "Chi", category: "greek", lower: "χ", upper: "Χ", latexLower: "\\chi", latexUpper: "X", upperIsLatin: true, htmlLower: "&chi;", htmlUpper: "&Chi;", unicodeLower: "U+03C7", unicodeUpper: "U+03A7", desc: "Chi-square distribution, magnetic susceptibility, Euler characteristic" },
  { name: "Psi", category: "greek", lower: "ψ", upper: "Ψ", latexLower: "\\psi", latexUpper: "\\Psi", upperIsLatin: false, htmlLower: "&psi;", htmlUpper: "&Psi;", unicodeLower: "U+03C8", unicodeUpper: "U+03A8", desc: "Quantum state wave function (Schrödinger equation), digamma function" },
  { name: "Omega", category: "greek", lower: "ω", upper: "Ω", latexLower: "\\omega", latexUpper: "\\Omega", upperIsLatin: false, htmlLower: "&omega;", htmlUpper: "&Omega;", unicodeLower: "U+03C9", unicodeUpper: "U+03A9", desc: "Angular velocity, electrical resistance Ohm (Ω), probability sample space" }
];

const extraMathData = [
  // Blackboard Bold
  { name: "Real Numbers (ℝ)", category: "blackboard", lower: "ℝ", upper: "-", latexLower: "\\mathbb{R}", latexUpper: "-", htmlLower: "&reals;", htmlUpper: "-", unicodeLower: "U+211D", desc: "Set of all real continuous numbers" },
  { name: "Complex Numbers (ℂ)", category: "blackboard", lower: "ℂ", upper: "-", latexLower: "\\mathbb{C}", latexUpper: "-", htmlLower: "&complexes;", htmlUpper: "-", unicodeLower: "U+2102", desc: "Set of all complex numbers with real and imaginary parts" },
  { name: "Natural Numbers (ℕ)", category: "blackboard", lower: "ℕ", upper: "-", latexLower: "\\mathbb{N}", latexUpper: "-", htmlLower: "&naturals;", htmlUpper: "-", unicodeLower: "U+2115", desc: "Set of natural counting numbers {0, 1, 2, ...}" },
  { name: "Integers (ℤ)", category: "blackboard", lower: "ℤ", upper: "-", latexLower: "\\mathbb{Z}", latexUpper: "-", htmlLower: "&integers;", htmlUpper: "-", unicodeLower: "U+2124", desc: "Set of all positive and negative whole numbers (German: Zahlen)" },
  { name: "Rational Numbers (ℚ)", category: "blackboard", lower: "ℚ", upper: "-", latexLower: "\\mathbb{Q}", latexUpper: "-", htmlLower: "&rationals;", htmlUpper: "-", unicodeLower: "U+211A", desc: "Set of rational numbers expressible as fractions" },
  { name: "Probability Measure (ℙ)", category: "blackboard", lower: "ℙ", upper: "-", latexLower: "\\mathbb{P}", latexUpper: "-", htmlLower: "&#x2119;", htmlUpper: "-", unicodeLower: "U+2119", desc: "Probability measure operator or projective geometric space" },
  { name: "Expected Value (𝔼)", category: "blackboard", lower: "𝔼", upper: "-", latexLower: "\\mathbb{E}", latexUpper: "-", htmlLower: "&#x2147;", htmlUpper: "-", unicodeLower: "U+2147", desc: "Mathematical expectation or average value of random variables" },
  { name: "Field / Galois (𝔽)", category: "blackboard", lower: "𝔽", upper: "-", latexLower: "\\mathbb{F}", latexUpper: "-", htmlLower: "&#x1D53D;", htmlUpper: "-", unicodeLower: "U+1D53D", desc: "Algebraic field or finite Galois field" },

  // Script / Calligraphic
  { name: "Lagrangian / Laplace (ℒ)", category: "calligraphic", lower: "ℒ", upper: "-", latexLower: "\\mathcal{L}", latexUpper: "-", htmlLower: "&Lagr;", htmlUpper: "-", unicodeLower: "U+2112", desc: "Lagrangian mechanics density or Laplace integral transform" },
  { name: "Hamiltonian (ℋ)", category: "calligraphic", lower: "ℋ", upper: "-", latexLower: "\\mathcal{H}", latexUpper: "-", htmlLower: "&hamilt;", htmlUpper: "-", unicodeLower: "U+210B", desc: "Total energy Hamiltonian operator or abstract Hilbert space" },
  { name: "Fourier Transform (ℱ)", category: "calligraphic", lower: "ℱ", upper: "-", latexLower: "\\mathcal{F}", latexUpper: "-", htmlLower: "&Fouriertrf;", htmlUpper: "-", unicodeLower: "U+2131", desc: "Fourier spectral transformation operator" },
  { name: "Normal Distribution (𝒩)", category: "calligraphic", lower: "𝒩", upper: "-", latexLower: "\\mathcal{N}", latexUpper: "-", htmlLower: "&#x1D4A9;", htmlUpper: "-", unicodeLower: "U+1D4A9", desc: "Gaussian or normal distribution notation N(μ, σ²)" },
  { name: "Big-O Notation (𝒪)", category: "calligraphic", lower: "𝒪", upper: "-", latexLower: "\\mathcal{O}", latexUpper: "-", htmlLower: "&order;", htmlUpper: "-", unicodeLower: "U+1D4AA", desc: "Asymptotic upper bound on algorithmic execution complexity" },

  // Fraktur / Gothic
  { name: "Lie Algebra (𝔤)", category: "fraktur", lower: "𝔤", upper: "𝔊", latexLower: "\\mathfrak{g}", latexUpper: "\\mathfrak{G}", htmlLower: "&#x1D524;", htmlUpper: "&#x1D50A;", unicodeLower: "U+1D524", desc: "Lie algebra associated with continuous symmetry groups" },
  { name: "Prime Ideal (𝔭)", category: "fraktur", lower: "𝔭", upper: "𝔓", latexLower: "\\mathfrak{p}", latexUpper: "\\mathfrak{P}", htmlLower: "&#x1D52D;", htmlUpper: "&#x1D513;", unicodeLower: "U+1D52D", desc: "Prime and maximal ideals in algebraic ring and number theory" },
  { name: "Continuum Cardinality (𝔠)", category: "fraktur", lower: "𝔠", upper: "ℭ", latexLower: "\\mathfrak{c}", latexUpper: "\\mathfrak{C}", htmlLower: "&#x1D520;", htmlUpper: "&#x212D;", unicodeLower: "U+1D520", desc: "Cardinality of the continuum of real numbers (2^ℵ₀)" },

  // Essential Operators
  { name: "Nabla / Del Operator", category: "operators", lower: "∇", upper: "-", latexLower: "\\nabla", latexUpper: "-", htmlLower: "&nabla;", htmlUpper: "-", unicodeLower: "U+2207", desc: "Vector differential operator: gradient, divergence, and curl" },
  { name: "Partial Derivative", category: "operators", lower: "∂", upper: "-", latexLower: "\\partial", latexUpper: "-", htmlLower: "&part;", htmlUpper: "-", unicodeLower: "U+2202", desc: "Partial derivative with respect to an independent variable" },
  { name: "Reduced Planck Constant (ℏ)", category: "operators", lower: "ℏ", upper: "-", latexLower: "\\hbar", latexUpper: "-", htmlLower: "&hbar;", htmlUpper: "-", unicodeLower: "U+210F", desc: "Fundamental quantum constant of action h / (2π) (Dirac constant)" },
  { name: "Infinity", category: "operators", lower: "∞", upper: "-", latexLower: "\\infty", latexUpper: "-", htmlLower: "&infin;", htmlUpper: "-", unicodeLower: "U+221E", desc: "Unbounded limit or infinite set concept" },
  { name: "Summation", category: "operators", lower: "∑", upper: "-", latexLower: "\\sum", latexUpper: "-", htmlLower: "&sum;", htmlUpper: "-", unicodeLower: "U+2211", desc: "Discrete series summation operator" },
  { name: "Product Operator", category: "operators", lower: "∏", upper: "-", latexLower: "\\prod", latexUpper: "-", htmlLower: "&prod;", htmlUpper: "-", unicodeLower: "U+220F", desc: "Discrete sequence product operator" },
  { name: "Integral", category: "operators", lower: "∫", upper: "∮", latexLower: "\\int", latexUpper: "\\oint", htmlLower: "&int;", htmlUpper: "&conint;", unicodeLower: "U+222B", desc: "Definite/indefinite integral and closed contour line integral" },
  { name: "Universal Quantifier (∀)", category: "operators", lower: "∀", upper: "-", latexLower: "\\forall", latexUpper: "-", htmlLower: "&forall;", htmlUpper: "-", unicodeLower: "U+2200", desc: "For all quantifier in predicate logic" },
  { name: "Existential Quantifier (∃)", category: "operators", lower: "∃", upper: "-", latexLower: "\\exists", latexUpper: "-", htmlLower: "&exist;", htmlUpper: "-", unicodeLower: "U+2203", desc: "There exists quantifier in mathematical logic" },
  { name: "Element Of (∈)", category: "operators", lower: "∈", upper: "∉", latexLower: "\\in", latexUpper: "\\notin", htmlLower: "&isin;", htmlUpper: "&notin;", unicodeLower: "U+2208", desc: "Set membership and non-membership operators" }
];

// Combined active symbols
const allSymbols = [...greekData, ...extraMathData];

let currentCategory = 'all';
let currentView = 'table';
let currentSearch = '';

function escapeText(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeAttr(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/'/g, '&#39;')
    .replace(/"/g, '&quot;');
}

function copyToClipboard(text, customMessage, event) {
  if (!text || text === '-') return;

  if (event && event.shiftKey) {
    appendToScratchpad(text + ' ');
  }

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).catch(() => {
      fallbackCopy(text);
    });
  } else {
    fallbackCopy(text);
  }

  showToast(text, customMessage || `Copied: ${text}`);
}

function fallbackCopy(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.left = '-9999px';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
  } catch (err) {}
  document.body.removeChild(textarea);
}

let toastTimeout;
function showToast(text, message) {
  const toast = document.getElementById('toast');
  const toastTitle = document.getElementById('toast-title');
  const toastBody = document.getElementById('toast-body');

  toastTitle.textContent = message || 'Copied to clipboard!';
  toastBody.textContent = text;

  toast.classList.remove('translate-y-16', 'opacity-0', 'pointer-events-none');
  toast.classList.add('translate-y-0', 'opacity-100');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.add('translate-y-16', 'opacity-0', 'pointer-events-none');
    toast.classList.remove('translate-y-0', 'opacity-100');
  }, 2200);
}

function renderTableRows(items) {
  const tbody = document.getElementById('table-rows');
  tbody.innerHTML = '';

  items.forEach(item => {
    const tr = document.createElement('tr');
    tr.className = 'hover:bg-slate-800/50 transition-colors group';

    // Lowercase Glyph & Variant
    const lowerGlyphHtml = `
      <button onclick="copyToClipboard('${item.lower}', 'Lowercase symbol copied: ${item.lower}', event)" 
              class="glyph-display w-10 h-10 rounded-xl bg-slate-800/90 hover:bg-indigo-600 text-slate-100 hover:text-white text-2xl flex items-center justify-center transition shadow-sm border border-slate-700/60 group-hover:border-indigo-500/50" 
              title="Copy '${item.lower}'">
        ${item.lower}
      </button>
      ${item.variant ? `
        <button onclick="copyToClipboard('${item.variant}', 'Variant symbol copied: ${item.variant}', event)" 
                class="glyph-display text-xs px-1.5 py-0.5 rounded bg-slate-800 text-indigo-300 hover:bg-indigo-700 hover:text-white border border-slate-700 transition" 
                title="Variant: ${item.variant} (${item.latexVariant})">
          ${item.variant}
        </button>
      ` : ''}
    `;

    // Uppercase Glyph
    const hasUpper = item.upper && item.upper !== '-';
    const upperGlyphHtml = hasUpper ? `
      <button onclick="copyToClipboard('${item.upper}', 'Uppercase symbol copied: ${item.upper}', event)" 
              class="glyph-display w-10 h-10 rounded-xl bg-slate-800/90 hover:bg-violet-600 text-slate-100 hover:text-white text-2xl flex items-center justify-center transition shadow-sm border border-slate-700/60 group-hover:border-violet-500/50" 
              title="Copy '${item.upper}'">
        ${item.upper}
      </button>
    ` : `<span class="text-slate-600 text-xs">—</span>`;

    // LaTeX column
    const latexUpperBtn = (item.latexUpper && item.latexUpper !== '-') ? `
      <button onclick="copyToClipboard('${item.latexUpper}', 'Uppercase LaTeX copied: ${item.latexUpper}', event)" 
              class="px-2 py-0.5 rounded-md bg-slate-950 hover:bg-violet-950/80 border border-slate-800 hover:border-violet-500/60 text-xs font-mono text-violet-300 transition" 
              title="Copy: ${item.latexUpper}">
        <code>${item.latexUpper}</code>
      </button>
    ` : '';

    const latexVariantBtn = item.latexVariant ? `
      <button onclick="copyToClipboard('${item.latexVariant}', 'LaTeX variant copied: ${item.latexVariant}', event)" 
              class="text-[11px] text-slate-400 hover:text-indigo-300 font-mono" 
              title="Variant: ${item.latexVariant}">
        (${item.latexVariant})
      </button>
    ` : '';

    // HTML column
    const htmlLowerBtn = (item.htmlLower && item.htmlLower !== '-') ? `
      <button onclick="copyToClipboard('${escapeAttr(item.htmlLower)}', 'HTML entity copied: ${escapeAttr(item.htmlLower)}', event)" 
              class="px-2 py-1 rounded-md bg-slate-950 hover:bg-amber-950/60 border border-slate-800 hover:border-amber-500/60 text-xs font-mono text-amber-300 transition flex items-center gap-1" 
              title="Copy HTML entity: ${escapeText(item.htmlLower)}">
        <span class="text-amber-500 font-bold">&amp;</span>
        <span>${escapeText(item.htmlLower.replace('&', ''))}</span>
      </button>
    ` : `<span class="text-slate-600 text-xs font-mono">—</span>`;

    const htmlUpperBtn = (item.htmlUpper && item.htmlUpper !== '-' && item.htmlUpper !== item.htmlLower) ? `
      <button onclick="copyToClipboard('${escapeAttr(item.htmlUpper)}', 'HTML entity copied: ${escapeAttr(item.htmlUpper)}', event)" 
              class="px-2 py-1 rounded-md bg-slate-950 hover:bg-amber-950/60 border border-slate-800 hover:border-amber-500/60 text-xs font-mono text-amber-400 transition flex items-center gap-1" 
              title="Copy HTML entity: ${escapeText(item.htmlUpper)}">
        <span class="text-amber-500 font-bold">&amp;</span>
        <span>${escapeText(item.htmlUpper.replace('&', ''))}</span>
      </button>
    ` : '';

    // Quick pair or solo copy button
    const quickPairBtn = hasUpper && item.upper !== item.lower ? `
      <button onclick="copyToClipboard('${item.lower} ${item.upper}', 'Pair copied: ${item.lower} ${item.upper}', event)" 
              class="px-2.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-indigo-600 text-xs font-medium text-slate-200 hover:text-white transition flex items-center gap-1 ml-auto shadow-sm" 
              title="Copy both lowercase and uppercase together">
        <span class="font-math font-semibold">${item.lower}</span>
        <span class="font-math font-semibold">${item.upper}</span>
      </button>
    ` : `
      <button onclick="copyToClipboard('${item.lower}', 'Copied: ${item.lower}', event)" 
              class="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-indigo-600 text-xs font-medium text-slate-200 hover:text-white transition flex items-center gap-1 ml-auto shadow-sm" 
              title="Copy symbol">
        <span>Copy</span>
      </button>
    `;

    tr.innerHTML = `
      <!-- Name & Description -->
      <td class="py-3.5 px-4">
        <div class="font-semibold text-white tracking-tight">
          ${item.name}
        </div>
        <div class="text-[11px] text-slate-400 line-clamp-1 mt-0.5" title="${item.desc || ''}">
          ${item.desc || ''}
        </div>
      </td>

      <!-- Lowercase -->
      <td class="py-3.5 px-4 text-center">
        <div class="flex items-center justify-center gap-1">
          ${lowerGlyphHtml}
        </div>
      </td>

      <!-- Uppercase -->
      <td class="py-3.5 px-4 text-center">
        <div class="flex items-center justify-center">
          ${upperGlyphHtml}
        </div>
      </td>

      <!-- LaTeX Commands -->
      <td class="py-3.5 px-4">
        <div class="flex flex-wrap items-center gap-1.5">
          <button onclick="copyToClipboard('${item.latexLower}', 'LaTeX lowercase copied: ${item.latexLower}', event)" 
                  class="px-2 py-0.5 rounded-md bg-slate-950 hover:bg-indigo-950/80 border border-slate-800 hover:border-indigo-500/60 text-xs font-mono text-indigo-300 transition" 
                  title="Copy: ${item.latexLower}">
            <code>${item.latexLower}</code>
          </button>
          ${latexUpperBtn}
          ${latexVariantBtn}
        </div>
      </td>

      <!-- HTML Entities -->
      <td class="py-3.5 px-4">
        <div class="flex flex-wrap items-center gap-1.5">
          ${htmlLowerBtn}
          ${htmlUpperBtn}
        </div>
      </td>

      <!-- Unicode Points -->
      <td class="py-3.5 px-4 font-mono text-xs text-slate-400">
        <button onclick="copyToClipboard('${item.unicodeLower}', 'Unicode copied: ${item.unicodeLower}', event)" 
                class="hover:text-indigo-400 transition" 
                title="Copy Unicode code point">
          ${item.unicodeLower}
        </button>
      </td>

      <!-- Action -->
      <td class="py-3.5 px-4 text-right">
        ${quickPairBtn}
      </td>
    `;

    tbody.appendChild(tr);
  });
}

function renderGridCards(items) {
  const grid = document.getElementById('grid-wrapper');
  grid.innerHTML = '';

  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/50 transition-all duration-200 flex flex-col justify-between shadow-lg hover:shadow-indigo-950/20 group';

    const hasUpper = item.upper && item.upper !== '-';

    card.innerHTML = `
      <div>
        <div class="flex items-center justify-between mb-3 pb-2 border-b border-slate-800/80">
          <h4 class="text-sm font-bold text-white">${item.name}</h4>
          <span class="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-950 border border-slate-800">
            ${item.unicodeLower}
          </span>
        </div>

        <!-- Glyphs Display -->
        <div class="flex items-center gap-3 my-3">
          <button onclick="copyToClipboard('${item.lower}', 'Character copied: ${item.lower}', event)" 
                  class="glyph-display w-12 h-12 rounded-xl bg-slate-800 hover:bg-indigo-600 text-slate-100 hover:text-white text-3xl flex items-center justify-center transition shadow-md border border-slate-700/80" 
                  title="Copy '${item.lower}'">
            ${item.lower}
          </button>
          ${hasUpper ? `
            <button onclick="copyToClipboard('${item.upper}', 'Uppercase copied: ${item.upper}', event)" 
                    class="glyph-display w-12 h-12 rounded-xl bg-slate-800 hover:bg-violet-600 text-slate-100 hover:text-white text-3xl flex items-center justify-center transition shadow-md border border-slate-700/80" 
                    title="Copy '${item.upper}'">
              ${item.upper}
            </button>
          ` : ''}
          ${item.variant ? `
            <button onclick="copyToClipboard('${item.variant}', 'Variant copied: ${item.variant}', event)" 
                    class="glyph-display px-2 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-indigo-300 text-sm border border-slate-700" 
                    title="Variant: ${item.variant}">
              ${item.variant}
            </button>
          ` : ''}
        </div>

        <p class="text-xs text-slate-400 line-clamp-2 my-2 min-h-[32px]">${item.desc || ''}</p>
      </div>

      <!-- Code snippets -->
      <div class="space-y-2 pt-3 border-t border-slate-800/80 text-xs">
        <!-- LaTeX -->
        <div class="flex items-center justify-between">
          <span class="text-slate-400">LaTeX:</span>
          <div class="flex items-center gap-1 font-mono">
            <button onclick="copyToClipboard('${item.latexLower}', 'LaTeX copied: ${item.latexLower}', event)" class="px-2 py-0.5 rounded bg-slate-950 text-indigo-300 hover:bg-indigo-950 border border-slate-800 hover:border-indigo-500/50 transition">
              <code>${item.latexLower}</code>
            </button>
            ${(item.latexUpper && item.latexUpper !== '-') ? `
              <button onclick="copyToClipboard('${item.latexUpper}', 'LaTeX copied: ${item.latexUpper}', event)" class="px-2 py-0.5 rounded bg-slate-950 text-violet-300 hover:bg-violet-950 border border-slate-800 hover:border-violet-500/50 transition">
                <code>${item.latexUpper}</code>
              </button>
            ` : ''}
          </div>
        </div>

        <!-- HTML Entity -->
        ${(item.htmlLower && item.htmlLower !== '-') ? `
        <div class="flex items-center justify-between">
          <span class="text-slate-400">HTML:</span>
          <div class="flex items-center gap-1 font-mono">
            <button onclick="copyToClipboard('${escapeAttr(item.htmlLower)}', 'Entity copied: ${escapeAttr(item.htmlLower)}', event)" class="px-2 py-0.5 rounded bg-slate-950 text-amber-300 hover:bg-amber-950 border border-slate-800 hover:border-amber-500/50 transition">
              <code>${escapeText(item.htmlLower)}</code>
            </button>
            ${(item.htmlUpper && item.htmlUpper !== '-' && item.htmlUpper !== item.htmlLower) ? `
              <button onclick="copyToClipboard('${escapeAttr(item.htmlUpper)}', 'Entity copied: ${escapeAttr(item.htmlUpper)}', event)" class="px-2 py-0.5 rounded bg-slate-950 text-amber-400 hover:bg-amber-950 border border-slate-800 hover:border-amber-500/50 transition">
                <code>${escapeText(item.htmlUpper)}</code>
              </button>
            ` : ''}
          </div>
        </div>
        ` : ''}
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterAndDisplay() {
  const q = currentSearch.trim().toLowerCase();

  const filtered = allSymbols.filter(item => {
    const matchCategory = (currentCategory === 'all') || (item.category === currentCategory);
    if (!matchCategory) return false;

    if (!q) return true;

    return (
      item.name.toLowerCase().includes(q) ||
      item.lower.toLowerCase().includes(q) ||
      (item.upper && item.upper.toLowerCase().includes(q)) ||
      (item.latexLower && item.latexLower.toLowerCase().includes(q)) ||
      (item.latexUpper && item.latexUpper.toLowerCase().includes(q)) ||
      (item.latexVariant && item.latexVariant.toLowerCase().includes(q)) ||
      (item.htmlLower && item.htmlLower.toLowerCase().includes(q)) ||
      (item.htmlUpper && item.htmlUpper.toLowerCase().includes(q)) ||
      (item.unicodeLower && item.unicodeLower.toLowerCase().includes(q)) ||
      (item.desc && item.desc.toLowerCase().includes(q))
    );
  });

  const countLabel = document.getElementById('results-count');
  countLabel.textContent = `Showing ${filtered.length} of ${allSymbols.length} symbols`;

  const tableWrapper = document.getElementById('table-wrapper');
  const gridWrapper = document.getElementById('grid-wrapper');
  const emptyState = document.getElementById('empty-state');

  if (filtered.length === 0) {
    tableWrapper.classList.add('hidden');
    gridWrapper.classList.add('hidden');
    emptyState.classList.remove('hidden');
  } else {
    emptyState.classList.add('hidden');
    if (currentView === 'table') {
      tableWrapper.classList.remove('hidden');
      gridWrapper.classList.add('hidden');
      renderTableRows(filtered);
    } else {
      tableWrapper.classList.add('hidden');
      gridWrapper.classList.remove('hidden');
      renderGridCards(filtered);
    }
  }
}

function setView(view) {
  currentView = view;
  const btnTable = document.getElementById('btn-view-table');
  const btnGrid = document.getElementById('btn-view-grid');

  if (view === 'table') {
    btnTable.className = 'px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 bg-indigo-600 text-white transition shadow-sm';
    btnGrid.className = 'px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 text-slate-400 hover:text-white hover:bg-slate-800 transition';
  } else {
    btnGrid.className = 'px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 bg-indigo-600 text-white transition shadow-sm';
    btnTable.className = 'px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 text-slate-400 hover:text-white hover:bg-slate-800 transition';
  }
  filterAndDisplay();
}

function setCategory(cat) {
  currentCategory = cat;
  const pills = document.querySelectorAll('.cat-pill');
  pills.forEach(pill => {
    if (pill.dataset.cat === cat) {
      pill.className = 'cat-pill active px-3.5 py-1.5 rounded-xl text-xs font-medium bg-indigo-600 text-white whitespace-nowrap transition shadow-sm';
    } else {
      pill.className = 'cat-pill px-3.5 py-1.5 rounded-xl text-xs font-medium bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 whitespace-nowrap transition';
    }
  });
  filterAndDisplay();
}

// Assigned on DOMContentLoaded: this script loads in <head>, before the body exists.
let searchInput;
let clearBtn;

function initializeSearch() {
  searchInput = document.getElementById('search-input');
  clearBtn = document.getElementById('clear-search');

  searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    if (currentSearch) {
      clearBtn.classList.remove('hidden');
    } else {
      clearBtn.classList.add('hidden');
    }
    filterAndDisplay();
  });

  clearBtn.addEventListener('click', clearSearch);
}

function clearSearch() {
  searchInput.value = '';
  currentSearch = '';
  clearBtn.classList.add('hidden');
  searchInput.focus();
  filterAndDisplay();
}

window.addEventListener('keydown', (e) => {
  if (e.key === '/' && document.activeElement !== searchInput && document.activeElement.tagName !== 'TEXTAREA') {
    e.preventDefault();
    searchInput.focus();
    searchInput.select();
  }
});

function appendToScratchpad(text) {
  const area = document.getElementById('scratchpad-text');
  area.value += text;
  renderPreview();
  showToast(text, 'Added to Scratchpad');
}

function insertTemplate(template) {
  const area = document.getElementById('scratchpad-text');
  const start = area.selectionStart;
  const end = area.selectionEnd;
  const before = area.value.substring(0, start);
  const after = area.value.substring(end);

  area.value = before + template + after;
  area.focus();
  area.selectionStart = area.selectionEnd = start + template.length;
  renderPreview();
  showToast(template, 'Template inserted into scratchpad');
}

function copyScratchpad() {
  const text = document.getElementById('scratchpad-text').value;
  if (!text.trim()) {
    showToast('', 'Scratchpad is empty');
    return;
  }
  copyToClipboard(text, 'Scratchpad copied to clipboard');
}

function clearScratchpad() {
  document.getElementById('scratchpad-text').value = '';
  renderPreview();
  showToast('', 'Scratchpad cleared');
}

// Decodes HTML entities (&gamma; -> γ) the way a Markdown renderer would.
// A <textarea> parses its content as plain text, so no markup or script is ever executed.
function decodeEntities(text) {
  const decoder = document.createElement('textarea');
  decoder.innerHTML = text;
  return decoder.value;
}

function renderPreview() {
  const text = document.getElementById('scratchpad-text').value;
  const preview = document.getElementById('scratchpad-preview');

  if (!text.trim()) {
    preview.innerHTML = '<span class="text-slate-600">The rendered formula will appear here.</span>';
    return;
  }

  // textContent keeps the input as plain text; KaTeX then replaces only the math parts.
  preview.textContent = decodeEntities(text);

  if (typeof renderMathInElement !== 'function') return; // KaTeX CDN unavailable: plain text fallback
  renderMathInElement(preview, {
    delimiters: [
      { left: '$$', right: '$$', display: true },
      { left: '$', right: '$', display: false }
    ],
    throwOnError: false
  });
}

function initializeCounts() {
  document.getElementById('count-all').textContent = allSymbols.length;
  document.getElementById('count-greek').textContent = allSymbols.filter(s => s.category === 'greek').length;
  document.getElementById('count-blackboard').textContent = allSymbols.filter(s => s.category === 'blackboard').length;
  document.getElementById('count-calligraphic').textContent = allSymbols.filter(s => s.category === 'calligraphic').length;
  document.getElementById('count-fraktur').textContent = allSymbols.filter(s => s.category === 'fraktur').length;
  document.getElementById('count-operators').textContent = allSymbols.filter(s => s.category === 'operators').length;
}

function initializeRibbon() {
  const ribbon = document.getElementById('quick-ribbon');
  const popularGlyphs = ['α', 'β', 'γ', 'δ', 'ε', 'θ', 'λ', 'μ', 'π', 'σ', 'ω', 'ℝ', 'ℂ', 'ℕ', '∇', '∂', '∞', '∫'];

  ribbon.innerHTML = '';
  popularGlyphs.forEach(char => {
    const item = allSymbols.find(s => s.lower === char || s.upper === char) || { lower: char, latexLower: '' };
    const btn = document.createElement('button');
    btn.className = 'glyph-display w-8 h-8 rounded-lg bg-slate-950 hover:bg-indigo-600 hover:text-white border border-slate-800 text-slate-200 text-base font-medium flex items-center justify-center transition shadow-sm';
    btn.title = `Copy '${char}' (${item.latexLower || ''})`;
    btn.onclick = (e) => copyToClipboard(char, `Copied: ${char}`, e);
    btn.textContent = char;
    ribbon.appendChild(btn);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  initializeSearch();
  document.getElementById('scratchpad-text').addEventListener('input', renderPreview);
  initializeCounts();
  initializeRibbon();
  filterAndDisplay();
});
