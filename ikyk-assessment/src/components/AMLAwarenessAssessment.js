import React, { useState } from 'react';

const AMLAwarenessAssessment = () => {
  const [step, setStep] = useState('intro');
  const [scenario, setScenario] = useState(null);
  const [answer, setAnswer] = useState('');
  const [assessment, setAssessment] = useState(null);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [loading, setLoading] = useState(false);

  // Case studies based on the provided content
  const scenarios = [
    {
      id: 1,
      title: "Retail Banking Case Study",
      description: `You are a retail banking employee at XYZ Bank, working in a busy branch. A customer, Mr. Ahmed Khan, walks into the branch and asks to open a new savings account. He provides a valid national ID and proof of address. Over the next three months, the following activities take place:

1. Unusual Cash Deposits: Mr. Khan makes frequent cash deposits, each just below the bank's reporting threshold (e.g., $9,800 when the threshold is $10,000).

2. Multiple Transfers: He transfers funds to several different personal accounts in other banks, often immediately after deposits.

3. Unexplained Third-Party Deposits: Several unknown individuals deposit money into his account, without any clear reason.

4. Reluctance to Provide Information: When asked about the source of his funds, Mr. Khan provides vague answers, claiming it's from "business profits" but refuses to provide supporting documentation.

5. Urgency to Withdraw: He frequently withdraws large sums in cash within days of deposits.`,
      task: "Analyze the situation and determine the appropriate course of action based on your level of AML awareness.",
      outcomeLevels: {
        1: {
          title: "Level 1 – Low Awareness (Insufficient AML Knowledge)",
          description: "You see no issue with the transactions and process them without questioning. No action is taken, and no red flags are raised. Risk: Possible facilitation of money laundering without detection."
        },
        2: {
          title: "Level 2 – Basic Awareness (Limited AML Understanding)",
          description: "You notice the cash deposits but assume they are normal business activities. You only ask Mr. Khan once about the source of funds but do not escalate the issue. Risk: Failure to recognize structuring (smurfing) as a money laundering technique."
        },
        3: {
          title: "Level 3 – Moderate Awareness (Identifies Some Red Flags but Takes Limited Action)",
          description: "You recognize the pattern of structured deposits and third-party transactions as potentially suspicious. You discuss the issue with your manager but do not immediately escalate it to the AML compliance team. Risk: Delay in reporting, giving the customer time to continue suspicious activities."
        },
        4: {
          title: "Level 4 – High Awareness (Proactively Identifies and Escalates Suspicious Activity)",
          description: "You identify multiple AML red flags (structuring, third-party deposits, urgency to withdraw). You report the activity to the AML Compliance Officer for further review. Action: A Suspicious Transaction Report (STR) may be filed, and further monitoring is conducted. Outcome: The risk is mitigated before potential money laundering occurs."
        },
        5: {
          title: "Level 5 – Expert Awareness (Takes Immediate and Strategic Action)",
          description: "You not only report the suspicious activity but also suggest enhanced due diligence. You review Mr. Khan's account history and check for any past suspicious activities. You collaborate with the AML team to assess potential links to criminal networks. Outcome: Proactive prevention of money laundering, strengthening the bank's AML controls."
        }
      },
      conclusion: "This exercise helps staff assess their level of AML awareness and encourages them to adopt a proactive approach in identifying and reporting suspicious transactions. The goal is to ensure all employees reach Level 4 or 5 to protect the institution from financial crime risks."
    },
    {
      id: 2,
      title: "Corporate Banking Case Study",
      description: `You are a relationship manager at XYZ Bank, handling corporate clients. A new corporate customer, Global Trading Ltd., applies for a business account. The company claims to be an import-export business dealing in electronics. They provide company registration documents, shareholder details, and financial statements. Over the next six months, the following activities take place:

1. Unusual Transaction Patterns: The company receives large wire transfers from multiple overseas entities, mainly from high-risk jurisdictions.

2. Rapid Movement of Funds: Funds are often transferred out within 24–48 hours, with little retention in the account.

3. Vague Business Justification: When questioned about transaction details, the company provides generic responses like "payments for goods" but does not supply invoices or shipping documents.

4. Multiple Unrelated Counterparties: Payments go to various unrelated companies in different countries, many of which have no clear connection to the electronics trade.

5. Urgency in Processing Transactions: The company frequently pressures the bank to process transactions quickly, sometimes offering to pay additional fees for expedited service.`,
      task: "Analyze the situation and determine the appropriate course of action based on your level of AML awareness.",
      outcomeLevels: {
        1: {
          title: "Level 1 – Low Awareness (Insufficient AML Knowledge)",
          description: "You assume all transactions are normal business operations and process them without further scrutiny. No red flags are raised, and no additional verification is done. Risk: The bank could unknowingly facilitate trade-based money laundering (TBML) or terrorist financing."
        },
        2: {
          title: "Level 2 – Basic Awareness (Limited AML Understanding)",
          description: "You notice the high-volume international transactions but do not investigate further. You accept the company's explanation without requesting additional documentation. Risk: Potentially allowing illicit funds to flow through the bank without detection."
        },
        3: {
          title: "Level 3 – Moderate Awareness (Identifies Some Red Flags but Takes Limited Action)",
          description: "You recognize some red flags like the rapid movement of funds and high-risk jurisdictions. You ask for some documentation but don't conduct a thorough investigation. You might discuss concerns with your manager but delay escalating to the compliance team. Risk: Partial identification of suspicious activity without proper follow-through."
        },
        4: {
          title: "Level 4 – High Awareness (Proactively Identifies and Escalates Suspicious Activity)",
          description: "You identify multiple red flags (high-risk jurisdictions, rapid movement, lack of documentation). You request detailed supporting documentation for transactions and escalate concerns to the AML team. Action: Enhanced due diligence is conducted, potentially leading to a Suspicious Activity Report (SAR). Outcome: Effective risk mitigation."
        },
        5: {
          title: "Level 5 – Expert Awareness (Takes Immediate and Strategic Action)",
          description: "You not only report suspicious activity but also conduct thorough research on the company and its counterparties. You verify the legitimacy of the electronics business through independent sources. You implement additional monitoring controls and collaborate with the AML team on a comprehensive risk assessment. Outcome: Comprehensive protection against potential financial crime."
        }
      },
      conclusion: "This exercise helps relationship managers and corporate banking staff assess their level of AML awareness in complex business scenarios. It highlights the importance of thorough due diligence, documentation verification, and prompt escalation of suspicious activities in corporate banking relationships."
    }
  ];

  const handleStart = () => {
    // Randomly select a scenario
    const randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];
    setScenario(randomScenario);
    setStep('scenario');
  };

  const handleSubmitAnswer = () => {
    if (!answer.trim()) return;
    
    setLoading(true);
    
    // In a real implementation, this would call an API to process the answer with AI
    // For demo purposes, we're simulating an AI assessment
    setTimeout(() => {
      // Analyze the answer to determine the level (1-5)
      // This is a simplified version - in reality, you would use NLP/AI to evaluate the answer
      
      const answerLowercase = answer.toLowerCase();
      
      // Keywords to look for at different levels
      const level5Keywords = ['enhance', 'due diligence', 'review history', 'collaborate', 'assess links', 'proactive', 'strategic', 'verify legitimacy', 'independent sources', 'comprehensive risk'];
      const level4Keywords = ['report', 'suspicious', 'escalate', 'compliance officer', 'red flags', 'str', 'sar', 'documentation', 'monitor'];
      const level3Keywords = ['pattern', 'unusual', 'suspicious', 'discuss', 'manager', 'concerns', 'verify'];
      const level2Keywords = ['ask', 'question', 'unusual', 'notice'];
      
      // Count keyword matches for each level
      const level5Count = level5Keywords.filter(keyword => answerLowercase.includes(keyword)).length;
      const level4Count = level4Keywords.filter(keyword => answerLowercase.includes(keyword)).length;
      const level3Count = level3Keywords.filter(keyword => answerLowercase.includes(keyword)).length;
      const level2Count = level2Keywords.filter(keyword => answerLowercase.includes(keyword)).length;
      
      // Determine level based on keyword density and answer length
      let level;
      
      if (level5Count >= 3) {
        level = 5;
      } else if (level4Count >= 3) {
        level = 4;
      } else if (level3Count >= 2) {
        level = 3;
      } else if (level2Count >= 1 || answer.length > 100) {
        level = 2;
      } else {
        level = 1;
      }
      
      const outcomeLevel = scenario.outcomeLevels[level];
      
      // Prepare feedback based on the level
      const feedback = generateFeedback(level, scenario.id);
      
      setAssessment({
        level,
        title: outcomeLevel.title,
        description: outcomeLevel.description,
        feedback: feedback,
        recommendation: getRecommendation(level),
        conclusion: scenario.conclusion
      });
      
      setLoading(false);
      setStep('assessment');
    }, 2000);
  };
  
  const generateFeedback = (level, scenarioId) => {
    // Retail Banking Scenario (ID: 1)
    if (scenarioId === 1) {
      switch(level) {
        case 1:
          return {
            levelStatement: "I would rate this learner at **Level 1 – Low Awareness**.",
            reasoning: "**Reasoning for Level 1 Rating:**",
            positives: [
              "The learner completes basic account transactions as requested."
            ],
            gaps: [
              "They **fail to recognize any red flags** in the customer's transaction patterns.",
              "They **do not question** the unusual cash deposits just below reporting thresholds.",
              "They **ignore third-party deposits** from unknown individuals.",
              "They **do not verify** the source of funds.",
              "They **fail to recognize structuring** (a clear money laundering technique)."
            ],
            improvement: "**How to Improve to Level 4 or 5:**\n* **Develop fundamental AML knowledge** including recognizing structuring techniques.\n* **Learn to identify key red flags** such as transactions below reporting thresholds.\n* **Understand the importance** of source of funds verification.\n* **Learn proper escalation procedures** for suspicious activities.\n* **Recognize the risk** of third-party deposits from unknown individuals."
          };
        case 2:
          return {
            levelStatement: "I would rate this learner at **Level 2 – Basic Awareness**.",
            reasoning: "**Reasoning for Level 2 Rating:**",
            positives: [
              "The learner **notices** the unusual cash deposits.",
              "They **ask once** about the source of funds."
            ],
            gaps: [
              "They **accept vague answers** about \"business profits\" without further investigation.",
              "They **fail to recognize structuring** (deposits just below reporting thresholds).",
              "They **do not identify the pattern** of immediate transfers to multiple accounts.",
              "They **disregard third-party deposits** from unknown individuals.",
              "They **do not escalate concerns** to management or compliance."
            ],
            improvement: "**How to Improve to Level 4 or 5:**\n* **Request specific documentation** to verify claimed business profits.\n* **Recognize structuring patterns** as a serious red flag requiring escalation.\n* **Report suspicious third-party deposits** from unknown individuals.\n* **Escalate concerns** to the AML compliance team.\n* **Monitor the account** for continued suspicious activity."
          };
        case 3:
          return {
            levelStatement: "I would rate this learner at **Level 3 – Moderate Awareness**.",
            reasoning: "**Reasoning for Level 3 Rating:**",
            positives: [
              "The learner **recognizes** the pattern of structured deposits.",
              "They **identify** third-party transactions as potentially suspicious.",
              "They **discuss concerns** with their manager."
            ],
            gaps: [
              "They **delay escalation** to the AML compliance team.",
              "They **take limited action** despite identifying multiple red flags.",
              "They **do not file** a Suspicious Transaction Report (STR).",
              "They **allow transactions to continue** while considering next steps.",
              "They **fail to conduct** enhanced due diligence."
            ],
            improvement: "**How to Improve to Level 4 or 5:**\n* **Immediately escalate** identified suspicious activities to compliance.\n* **Document all red flags** thoroughly in internal systems.\n* **Initiate enhanced monitoring** of the customer's account.\n* **Request additional documentation** to verify source of funds.\n* **Understand the urgency** of acting on structured transactions to prevent ongoing money laundering."
          };
        case 4:
          return {
            levelStatement: "I would rate this learner at **Level 4 – High Awareness**.",
            reasoning: "**Reasoning for Level 4 Rating:**",
            positives: [
              "The learner **correctly identifies** multiple AML red flags (structuring, third-party deposits, etc.)",
              "They **promptly report** the suspicious activity to the AML Compliance Officer.",
              "They **recognize** the need for further investigation.",
              "They **understand** the importance of filing a Suspicious Transaction Report (STR).",
              "They **take action** to mitigate risk before potential money laundering occurs."
            ],
            gaps: [
              "They **could conduct more proactive research** into the customer's history.",
              "They **may not suggest** specific enhanced due diligence measures."
            ],
            improvement: "**How to Improve to Level 5:**\n* **Review the customer's complete account history** for additional patterns.\n* **Suggest specific enhanced due diligence measures** appropriate to the risk level.\n* **Analyze potential connections** to other accounts or known money laundering networks.\n* **Develop a strategic monitoring plan** for similar customers.\n* **Collaborate with the AML team** on broader pattern recognition."
          };
        case 5:
          return {
            levelStatement: "I would rate this learner at **Level 5 – Expert Awareness**.",
            reasoning: "**Reasoning for Level 5 Rating:**",
            positives: [
              "The learner **immediately identifies** all relevant red flags (structuring, third-party deposits, vague explanations).",
              "They **proactively report** the suspicious activity to the AML Compliance team.",
              "They **recommend enhanced due diligence** measures.",
              "They **review the customer's account history** for additional patterns.",
              "They **collaborate with AML specialists** to assess potential connections to criminal networks.",
              "They **suggest strategic monitoring** approaches beyond this specific case."
            ],
            gaps: [
              "No significant gaps identified at this expert level."
            ],
            improvement: "**Maintaining Excellence:**\n* **Continue mentoring others** on AML best practices.\n* **Stay updated** on emerging money laundering techniques.\n* **Participate in developing** institutional AML strategies.\n* **Contribute to training programs** to elevate awareness across the organization.\n* **Engage with industry forums** to share anonymized case studies and learnings."
          };
        default:
          return {
            levelStatement: "Assessment level undetermined.",
            reasoning: "",
            positives: [],
            gaps: [],
            improvement: ""
          };
      }
    } 
    // Corporate Banking Scenario (ID: 2)
    else {
      switch(level) {
        case 1:
          return {
            levelStatement: "I would rate this learner at **Level 1 – Low Awareness**.",
            reasoning: "**Reasoning for Level 1 Rating:**",
            positives: [
              "The learner performs basic account management functions."
            ],
            gaps: [
              "They **fail to identify any red flags** in the high-risk transaction patterns.",
              "They **do not question** the rapid movement of funds.",
              "They **accept vague justifications** without requesting documentation.",
              "They **ignore payments** to unrelated companies with no connection to the electronics trade.",
              "They **do not recognize** the significance of high-risk jurisdictions."
            ],
            improvement: "**How to Improve to Level 4 or 5:**\n* **Develop fundamental knowledge** of trade-based money laundering techniques.\n* **Learn to identify** high-risk jurisdictions and their significance.\n* **Understand the importance** of transaction documentation verification.\n* **Recognize red flags** such as rapid fund movements and unrelated counterparties.\n* **Learn proper escalation procedures** for suspicious corporate activities."
          };
        case 2:
          return {
            levelStatement: "I would rate this learner at **Level 2 – Basic Awareness**.",
            reasoning: "**Reasoning for Level 2 Rating:**",
            positives: [
              "The learner **notices** the high-volume international transactions.",
              "They have **some awareness** of unusual transaction patterns."
            ],
            gaps: [
              "They **accept generic explanations** like \"payments for goods\" without verification.",
              "They **fail to request** supporting documentation such as invoices or shipping records.",
              "They **do not recognize** the significance of high-risk jurisdictions.",
              "They **overlook** payments to unrelated companies with no connection to electronics.",
              "They **process transactions** despite pressure for urgency, without appropriate scrutiny."
            ],
            improvement: "**How to Improve to Level 4 or 5:**\n* **Request specific documentation** to verify business purpose of transactions.\n* **Research counterparties** to confirm legitimate business relationships.\n* **Understand high-risk jurisdictions** and apply appropriate scrutiny.\n* **Question urgency** in transaction processing as a potential red flag.\n* **Escalate concerns** to the AML compliance team for guidance."
          };
        case 3:
          return {
            levelStatement: "I would rate this learner at **Level 3 – Moderate Awareness**.",
            reasoning: "**Reasoning for Level 3 Rating:**",
            positives: [
              "The learner **recognizes** some red flags such as transactions from high-risk jurisdictions.",
              "They **question** the rapid movement of funds.",
              "They **ask for some documentation** about the transactions."
            ],
            gaps: [
              "They **conduct limited verification** of the company's business activities.",
              "They **delay escalation** to the compliance team.",
              "They **accept partial documentation** without comprehensive due diligence.",
              "They **fail to thoroughly investigate** the unrelated counterparties.",
              "They **discuss concerns with management** but don't take decisive action."
            ],
            improvement: "**How to Improve to Level 4 or 5:**\n* **Implement enhanced due diligence** for high-risk jurisdictions immediately.\n* **Verify all counterparties** through independent business registries.\n* **Request comprehensive documentation** including invoices, contracts, and shipping records.\n* **Promptly escalate concerns** to the AML compliance team.\n* **Develop a monitoring strategy** for ongoing transaction surveillance."
          };
        case 4:
          return {
            levelStatement: "I would rate this learner at **Level 4 – High Awareness**.",
            reasoning: "**Reasoning for Level 4 Rating:**",
            positives: [
              "The learner **correctly identifies** multiple red flags (high-risk jurisdictions, rapid movements, unrelated counterparties).",
              "They **request detailed supporting documentation** for all transactions.",
              "They **escalate concerns** to the AML team promptly.",
              "They **understand** the need for enhanced due diligence.",
              "They **recognize patterns** consistent with trade-based money laundering."
            ],
            gaps: [
              "They **could conduct more independent research** into the company's legitimacy.",
              "They **may not implement** a comprehensive transaction monitoring strategy."
            ],
            improvement: "**How to Improve to Level 5:**\n* **Conduct independent verification** of the company's business operations.\n* **Research industry standards** for electronics trade to benchmark against client behavior.\n* **Develop a strategic approach** to ongoing monitoring and risk assessment.\n* **Collaborate with AML specialists** on trade-based money laundering prevention.\n* **Implement specific controls** based on the unique risk profile of the client."
          };
        case 5:
          return {
            levelStatement: "I would rate this learner at **Level 5 – Expert Awareness**.",
            reasoning: "**Reasoning for Level 5 Rating:**",
            positives: [
              "The learner **immediately identifies** all relevant red flags in the complex scenario.",
              "They **conduct thorough research** on the company and its counterparties.",
              "They **verify the legitimacy** of the electronics business through independent sources.",
              "They **implement additional monitoring controls** specific to the risk profile.",
              "They **collaborate strategically** with the AML team on comprehensive risk assessment.",
              "They **understand the broader implications** for institutional risk management."
            ],
            gaps: [
              "No significant gaps identified at this expert level."
            ],
            improvement: "**Maintaining Excellence:**\n* **Develop institutional knowledge** by documenting case studies for training.\n* **Contribute to AML policy development** based on practical experience.\n* **Mentor colleagues** on complex corporate client risk assessment.\n* **Stay updated** on evolving trade-based money laundering techniques.\n* **Engage with industry forums** to share best practices in corporate client due diligence."
          };
        default:
          return {
            levelStatement: "Assessment level undetermined.",
            reasoning: "",
            positives: [],
            gaps: [],
            improvement: ""
          };
      }
    }
  };
  
  const getRecommendation = (level) => {
    switch(level) {
      case 1:
        return "We recommend our comprehensive 'AML Fundamentals' training program to establish essential knowledge of financial crime risks and regulatory requirements.";
      case 2:
        return "Our 'AML Detection Skills' workshop would help you develop a better understanding of suspicious activity indicators and reporting procedures.";
      case 3:
        return "To enhance your awareness, we suggest our 'Advanced AML Risk Assessment' course, which focuses on comprehensive red flag identification and proper escalation procedures.";
      case 4:
        return "You demonstrate strong AML awareness. Our 'AML for Team Leaders' program would further develop your skills in guiding others and implementing robust controls.";
      case 5:
        return "Your expertise is excellent. Consider our 'Strategic AML Governance' executive program to further enhance your strategic approach to financial crime prevention.";
      default:
        return "We offer customized AML training programs tailored to your specific needs.";
    }
  };
  
  const handleContact = () => {
    // In a real implementation, this would send the contact information to a CRM or email system
    // For demo purposes, we're just moving to the thank you screen
    setStep('thankYou');
  };

  const handleSelectScenario = (id) => {
    const selectedScenario = scenarios.find(s => s.id === id);
    setScenario(selectedScenario);
    setStep('scenario');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {step === 'intro' && (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-blue-800">i-KYC AML Awareness Assessment</h1>
            <p className="text-lg text-gray-600 mt-2">Test your Anti-Money Laundering awareness and receive personalized training recommendations</p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-700 mb-3">How It Works</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>You'll be presented with a realistic AML case study</li>
              <li>Respond with how you would handle the situation</li>
              <li>Our assessment tool will analyze your response and determine your AML awareness level</li>
              <li>Receive detailed feedback on your strengths and areas for improvement</li>
              <li>Get tailored training recommendations based on your assessment</li>
            </ol>
          </div>
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-blue-700 mb-3">Select a Case Study</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {scenarios.map(s => (
                <div 
                  key={s.id}
                  className="border border-gray-200 rounded-lg p-4 hover:bg-blue-50 cursor-pointer transition"
                  onClick={() => handleSelectScenario(s.id)}
                >
                  <h3 className="font-bold text-blue-600">{s.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">
                    {s.description.substring(0, 120)}...
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-500 mb-2">Or try a random case study:</p>
              <button 
                onClick={handleStart}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
              >
                Start Random Assessment
              </button>
            </div>
          </div>
        </div>
      )}
      
      {step === 'scenario' && scenario && (
        <div className="space-y-6">
          <h1 className="text-2xl font-bold text-blue-800">{scenario.title}</h1>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h2 className="font-semibold text-gray-800 mb-4">Scenario:</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{scenario.description}</p>
            
            <h2 className="font-semibold text-gray-800 mt-6 mb-2">Your Task:</h2>
            <p className="text-gray-700 leading-relaxed">{scenario.task}</p>
          </div>
          
          <div className="mt-6">
            <label className="block text-gray-700 font-medium mb-2">
              Your Response:
            </label>
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="w-full h-48 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Describe in detail how you would handle this situation..."
            />
          </div>
          
          <div className="mt-6 flex justify-end">
            <button 
              onClick={handleSubmitAnswer}
              disabled={!answer.trim() || loading}
              className={`${
                loading || !answer.trim() ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
              } text-white font-bold py-2 px-6 rounded-lg transition duration-200`}
            >
              {loading ? 'Analyzing...' : 'Submit'}
            </button>
          </div>
        </div>
      )}
      
      {step === 'assessment' && assessment && (
        <div className="space-y-8">
          <h1 className="text-2xl font-bold text-blue-800">Your AML Awareness Assessment Results</h1>
          
          <div className={`p-6 rounded-lg ${
            assessment.level >= 4 ? 'bg-green-50 border border-green-200' : 
            assessment.level === 3 ? 'bg-yellow-50 border border-yellow-200' :
            'bg-red-50 border border-red-200'
          }`}>
            <div className="prose max-w-none">
              <p className="text-xl font-semibold mb-2">{assessment.feedback.levelStatement}</p>
              <p className="font-semibold mt-4">{assessment.feedback.reasoning}</p>
              
              <div className="mt-2">
                <p className="font-medium text-green-700">✅ <strong>Positives:</strong></p>
                <ul className="list-disc pl-6 mt-1 space-y-1">
                  {assessment.feedback.positives.map((positive, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: positive.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                  ))}
                </ul>
              </div>
              
              <div className="mt-4">
                <p className="font-medium text-red-700">❌ <strong>Gaps in Awareness:</strong></p>
                <ul className="list-disc pl-6 mt-1 space-y-1">
                  {assessment.feedback.gaps.map((gap, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: gap.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                  ))}
                </ul>
              </div>
              
              <div className="mt-4" dangerouslySetInnerHTML={{ __html: assessment.feedback.improvement.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>') }} />
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-lg font-semibold text-blue-700 mb-2">Training Recommendation:</h2>
            <p className="text-gray-700">{assessment.recommendation}</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Conclusion:</h2>
            <p className="text-gray-600">{assessment.conclusion}</p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h2 className="text-lg font-semibold text-green-700 mb-3">Ready to enhance your AML capabilities?</h2>
            <p className="text-gray-700 mb-4">Leave your details below and an i-KYC training specialist will contact you with personalized recommendations.</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="your.email@company.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-1">Company</label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Your organization"
                />
              </div>
              
              <div className="mt-4">
                <button 
                  onClick={handleContact}
                  disabled={!email.trim() || !name.trim()}
                  className={`${
                    !email.trim() || !name.trim() ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
                  } text-white font-bold py-2 px-6 rounded-lg transition duration-200 w-full`}
                >
                  Request Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {step === 'thankYou' && (
        <div className="text-center py-12 space-y-6">
          <div className="text-green-600 text-6xl">✓</div>
          <h1 className="text-3xl font-bold text-blue-800">Thank You!</h1>
          <p className="text-xl text-gray-600">An i-KYC training specialist will contact you shortly.</p>
          <p className="text-gray-500 mt-8">
            In the meantime, explore our <a href="#" className="text-blue-600 hover:underline">AML resource library</a> for more insights on financial crime compliance.
          </p>
          
          <button 
            onClick={() => {
              setStep('intro');
              setScenario(null);
              setAnswer('');
              setAssessment(null);
              setEmail('');
              setName('');
              setCompany('');
            }}
            className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-200"
          >
            Take Another Assessment
          </button>
        </div>
      )}
      
      <div className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} i-KYC Ltd. All rights reserved.
      </div>
    </div>
  );
};

export default AMLAwarenessAssessment;
