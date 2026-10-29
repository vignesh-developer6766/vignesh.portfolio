// Professional 1-page PDF Resume Generator for Vignesh Rahul E.
const fs = require('fs');
const path = require('path');

function createResumePDF() {
  const lines = [
    { text: "VIGNESH RAHUL E.", size: 22, font: "/F2", dy: 0 },
    { text: "Aspiring Machine Learning Engineer", size: 13, font: "/F2", dy: -24 },
    { text: "Coimbatore, Tamil Nadu, India | +91 8667053190 | vigneshe6766@gmail.com", size: 9.5, font: "/F1", dy: -18 },
    { text: "GitHub: github.com/vignesh-developer6766 | LinkedIn: linkedin.com/in/vignesh-rahul-e-a6496432a", size: 9.5, font: "/F1", dy: -14 },
    
    // Summary
    { text: "PROFESSIONAL SUMMARY", size: 11, font: "/F2", dy: -24 },
    { text: "Computer Science and Engineering student passionate about Machine Learning, Python development, and", size: 9.5, font: "/F1", dy: -15 },
    { text: "building practical AI-powered applications. Experienced in developing full-stack web solutions combining", size: 9.5, font: "/F1", dy: -13 },
    { text: "machine learning algorithms with clean user interfaces and real-world problem-solving.", size: 9.5, font: "/F1", dy: -13 },

    // Education
    { text: "EDUCATION", size: 11, font: "/F2", dy: -22 },
    { text: "Bachelor of Engineering in Computer Science and Engineering (2024 - 2028 | Ongoing)", size: 9.5, font: "/F2", dy: -15 },
    { text: "Dr. N.G.P. Institute of Technology, Coimbatore, Tamil Nadu", size: 9.5, font: "/F1", dy: -13 },

    // Technical Skills
    { text: "TECHNICAL SKILLS", size: 11, font: "/F2", dy: -22 },
    { text: "Programming Languages: Python, SQL, JavaScript, HTML5, CSS3", size: 9.5, font: "/F1", dy: -15 },
    { text: "Machine Learning & Data: Machine Learning, NumPy, Pandas, Scikit-learn, TF-IDF, Naive Bayes", size: 9.5, font: "/F1", dy: -13 },
    { text: "Frameworks & Backend: Flask, Django, FastAPI, RESTful APIs, SQLite", size: 9.5, font: "/F1", dy: -13 },
    { text: "Developer Tools: Git, GitHub, Docker, Google Colab, VS Code", size: 9.5, font: "/F1", dy: -13 },

    // Experience
    { text: "EXPERIENCE", size: 11, font: "/F2", dy: -22 },
    { text: "Machine Learning Intern | Techvolt Pvt. Ltd. (15 Days)", size: 9.5, font: "/F2", dy: -15 },
    { text: "- Gained practical exposure to end-to-end data preprocessing pipelines and feature engineering.", size: 9.5, font: "/F1", dy: -13 },
    { text: "- Studied model training, validation techniques, and evaluation metrics using Python and Scikit-learn.", size: 9.5, font: "/F1", dy: -13 },
    { text: "- Strengthened core Python programming and algorithmic problem-solving abilities.", size: 9.5, font: "/F1", dy: -13 },

    // Featured Projects
    { text: "FEATURED PROJECTS", size: 11, font: "/F2", dy: -22 },
    { text: "ExpenseShare AI - AI-Powered Expense Management & Analytics Web Application", size: 9.5, font: "/F2", dy: -15 },
    { text: "- Engineered an expense sharing web platform with user authentication, group splitting, and debt graph simplification.", size: 9.5, font: "/F1", dy: -13 },
    { text: "- Implemented an ML categorization pipeline using TF-IDF vectorization and Naive Bayes classifier.", size: 9.5, font: "/F1", dy: -13 },
    { text: "- Integrated optical character recognition (OCR) with Pytesseract for receipt bill text extraction.", size: 9.5, font: "/F1", dy: -13 },
    { text: "- Built interactive analytics dashboards visualizing 6-month spending trends and budget anomalies.", size: 9.5, font: "/F1", dy: -13 },
    { text: "- Tech Stack: Python, Flask, SQLite, Scikit-learn, Pandas, Bootstrap 5, Chart.js", size: 9, font: "/F1", dy: -12 },
    
    { text: "EstateVal AI - House Price Prediction Engine", size: 9.5, font: "/F2", dy: -15 },
    { text: "- Built real estate valuation ML application with Gradient Boosting Regressor and interactive REST API.", size: 9.5, font: "/F1", dy: -13 },
    { text: "- Tech Stack: Python, Flask, Scikit-Learn, NumPy, HTML/CSS", size: 9, font: "/F1", dy: -12 },

    // Certifications & Activities
    { text: "CERTIFICATIONS & ACTIVITIES", size: 11, font: "/F2", dy: -22 },
    { text: "- Full Stack with Python and Django Certification - Pinesphere Solutions", size: 9.5, font: "/F1", dy: -15 },
    { text: "- Machine Learning Internship Certification - Techvolt Pvt. Ltd.", size: 9.5, font: "/F1", dy: -13 },
    { text: "- 24-Hour Hackathon Participant - SNS College of Technology, Coimbatore", size: 9.5, font: "/F1", dy: -13 },
    { text: "- Academic Paper Presentation Participant - CGT College, Coimbatore", size: 9.5, font: "/F1", dy: -13 }
  ];

  // Construct PDF stream commands
  let streamContent = "BT\n";
  let curY = 740;
  let curX = 54;
  let isFirst = true;

  for (const item of lines) {
    if (isFirst) {
      streamContent += `${item.font} ${item.size} Tf\n`;
      streamContent += `${curX} ${curY} Td\n`;
      streamContent += `(${escapePDF(item.text)}) Tj\n`;
      isFirst = false;
    } else {
      streamContent += `${item.font} ${item.size} Tf\n`;
      streamContent += `0 ${item.dy} Td\n`;
      streamContent += `(${escapePDF(item.text)}) Tj\n`;
    }
  }
  streamContent += "ET\n";

  const streamBytes = Buffer.from(streamContent, 'utf-8');

  // Object 1: Catalog
  // Object 2: Pages
  // Object 3: Page
  // Object 4: Stream Contents
  // Object 5: Font F1 (Helvetica)
  // Object 6: Font F2 (Helvetica-Bold)

  let body = "";
  const offsets = [];

  function appendObj(num, content) {
    offsets[num] = Buffer.byteLength(body, 'latin1');
    body += `${num} 0 obj\n${content}\nendobj\n`;
  }

  body += "%PDF-1.4\n";

  appendObj(1, `<< /Type /Catalog /Pages 2 0 R >>`);
  appendObj(2, `<< /Type /Pages /Kids [3 0 R] /Count 1 >>`);
  appendObj(3, `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>`);
  appendObj(4, `<< /Length ${streamBytes.length} >>\nstream\n${streamContent}endstream`);
  appendObj(5, `<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>`);
  appendObj(6, `<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>`);

  const xrefOffset = Buffer.byteLength(body, 'latin1');
  let xref = `xref\n0 7\n0000000000 65535 f \n`;
  for (let i = 1; i <= 6; i++) {
    xref += String(offsets[i]).padStart(10, '0') + ` 00000 n \n`;
  }

  const trailer = `trailer\n<< /Size 7 /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;
  const fullPDF = body + xref + trailer;

  const targetDir = path.join(__dirname, '..', 'public', 'resume');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const targetPath = path.join(targetDir, 'Vignesh_Rahul_E_Resume.pdf');
  fs.writeFileSync(targetPath, fullPDF, 'latin1');
  console.log(`Successfully generated resume PDF at: ${targetPath} (${fs.statSync(targetPath).size} bytes)`);
}

function escapePDF(str) {
  return str.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
}

createResumePDF();
