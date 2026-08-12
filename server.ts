import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini Client server-side
const apiKey = process.env.GEMINI_API_KEY;
const ai = apiKey
  ? new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    })
  : null;

// Health Check API
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// AI Diagnostic API for Car Troubleshooting
app.post("/api/diagnose", async (req, res) => {
  try {
    const { carMake, carModel, carYear, symptomDescription } = req.body;

    if (!symptomDescription || symptomDescription.trim() === "") {
      return res.status(400).json({ error: "الرجاء كتابة وصف عطل السيارة أو الأعراض التي تظهر لديك." });
    }

    if (!ai) {
      // Fallback response if API key is not yet set
      return res.json({
        symptomSummary: `تشخيص مبدئي لسيارة ${carMake || ''} ${carModel || ''}: ${symptomDescription}`,
        possibleCauses: [
          {
            cause: "ضعف البطارية أو نظام الشحن المولد (الدينامو)",
            probability: "80%",
            explanation: "عدم استجابة السلف أو ظهور أنوار طبلون ضعيفة تشير عادة لانتهاء عمر البطارية أو تلف المولد."
          },
          {
            cause: "مشكلة في توصيلات الكهرباء والفيوزات الرئيسية",
            probability: "15%",
            explanation: "ارتخاء كابل البطارية أو انقطاع فيوز رئيسي يمنع وصول التيار لنظام التشغيل."
          }
        ],
        severity: "medium",
        safetyWarning: "ينصح بعدم محاولة تكرار التشغيل المستمر لتجنب احتراق السلف.",
        recommendedService: "battery",
        estimatedCostRange: "50 - 250 ريال",
        suggestedAction: "اطلب فحص الورشة المتنقلة الفوري للوصول وإجراء فحص بالكمبيوتر واشتراك البطارية في الموقع."
      });
    }

    const prompt = `أنت مهندس خبير ومختص في صيانة السيارات والورش المتنقلة.
تم استلام وصف عطل من عميل يطلب الخدمة المتنقلة:
- نوع السيارة: ${carMake || 'غير محدد'}
- موديل وتاريخ التصنيع: ${carModel || ''} ${carYear || ''}
- وصف الأعراض أو المشكلة التي يواجهها السائق: "${symptomDescription}"

قم بتحليل المشكلة بأسلوب احترافي ومبسط باللغة العربية، وأعد النتيجة بصيغة JSON فقط بالتنسيق المباشر التالي:
{
  "symptomSummary": "ملخص سريع للأعراض التي يواجهها السائق",
  "possibleCauses": [
    {
      "cause": "السبب المرجح الأول",
      "probability": "نسبة مئوية تقريبية e.g. 75%",
      "explanation": "شرح مبسط للسبب وكيف يتسبب بالعطل"
    },
    {
      "cause": "السبب المرجح الثاني",
      "probability": "نسبة مئوية تقريبية e.g. 25%",
      "explanation": "شرح مبسط للسبب الثانوي"
    }
  ],
  "severity": "high أو medium أو low",
  "safetyWarning": "تحذير سلامة موجه للسائق (هل يستمر بالقيادة أم يوقف السيارة فوراً؟)",
  "recommendedService": "إحدى القيم التالية تماماً: electrical أو mechanical أو battery أو computer",
  "estimatedCostRange": "نطاق التكلفة التقديرية بالريال السعودي e.g. 100 - 200 ريال",
  "suggestedAction": "التوصية بالخطوة التالية مع الورشة المتنقلة"
}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const responseText = response.text || "{}";
    const parsedData = JSON.parse(responseText);

    return res.json(parsedData);
  } catch (err: any) {
    console.error("Diagnosis error:", err);
    res.status(500).json({
      error: "تعذر إجراء الفحص بالذكاء الاصطناعي حالياً، يمكنك الاتصال بالفني مباشرة عبر الواتساب أو الهاتف.",
      details: err?.message
    });
  }
});

// Start Express and Vite
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
