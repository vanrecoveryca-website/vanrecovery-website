(function () {
  document.documentElement.lang = "zh-Hans";

  const common = {
    "Symptoms":"症状","Treatment":"治疗","Locations":"诊所地点","Recovery Check":"康复评估","English":"English",
    "ICBC Recovery Guide":"ICBC 康复指南","Mental Health Recovery":"心理健康康复","Response Within 24 Hours":"24 小时内回复",
    "Treatment in 2-4 Days":"2–4 天内开始治疗","ICBC Counselling Options":"ICBC 心理咨询方案","Start Recovery Check":"开始康复评估",
    "Should I Seek Care?":"我是否应该就医？","When to seek care":"何时应该就医","Does this sound familiar?":"您是否有这些情况？",
    "Why get assessed early?":"为什么要尽早评估？","Why get support early?":"为什么要尽早获得支持？","Treatment Options":"治疗方案",
    "25 Sessions":"25 次疗程","12 Sessions":"12 次疗程","In Person":"线下面诊","Virtual":"线上咨询","30 Min":"30 分钟","45 Min":"45 分钟","50 Min":"50 分钟","60 Min":"60 分钟",
    "Expert Insight":"专家建议","People Also Ask":"常见问题","Related Symptoms":"相关症状","Other symptoms after a car accident":"车祸后的其他症状",
    "Car accident injuries often occur together. Explore other symptoms that may affect your recovery.":"车祸造成的伤害经常同时出现。了解其他可能影响您康复的症状。",
    "Ready to Take the Next Step?":"准备好开始下一步了吗？","Start your 30-second Recovery Check or choose the clinic location that's most convenient for you.":"完成 30 秒康复评估，或选择最方便的诊所地点。",
    "Take Recovery Check":"开始康复评估","View Clinic Locations":"查看诊所地点","ICBC Recovery Hub":"ICBC 康复中心","Vancouver & Richmond":"温哥华及列治文",
    "Helping ICBC patients understand their recovery options and connect with trusted treatment providers in Vancouver and Richmond.":"帮助 ICBC 伤者了解康复方案，并联系温哥华及列治文值得信赖的治疗机构。",
    "Quick Links":"快速链接","How ICBC Works":"ICBC 理赔流程","30s Check":"30 秒评估","Privacy Policy":"隐私政策","Opening Hours":"营业时间",
    "Monday - Saturday":"星期一至星期六","Sunday":"星期日","Website and AI Search Optimization by":"网站及 AI 搜索优化：",
    "Treatment recommendations depend on your symptoms, movement, and clinical assessment. Depending on your recovery needs, one or more treatment options may be recommended.":"治疗建议取决于您的症状、活动情况和临床评估。根据康复需要，可能会建议一种或多种治疗方案。",
    "Last reviewed: June 2026 · Educational content only":"最后审核：2026 年 6 月 · 内容仅供健康教育参考","Last reviewed: July 2026 · Educational content only":"最后审核：2026 年 7 月 · 内容仅供健康教育参考",
    "When should I get checked urgently?":"什么情况下需要立即检查？","10 YEARS EXPERIENCE":"10 年从业经验","17+ YEARS EXPERIENCE":"17 年以上从业经验","17+ Years Experience":"17 年以上从业经验","4+ YEARS EXPERIENCE":"4 年以上从业经验","7+ Years Experience":"7 年以上从业经验","ICBC Car Accident":"ICBC 车祸",
    "Headaches may appear after neck strain, whiplash, concussion, or muscle tension.":"头痛可能由颈部拉伤、挥鞭伤、脑震荡或肌肉紧张引起。","Headaches may appear after back or neck strain, concussion, or muscle tension.":"头痛可能由背部或颈部拉伤、脑震荡或肌肉紧张引起。",
    "Back discomfort may occur when the spine absorbs collision-related force.":"脊椎承受碰撞冲击时可能出现背部不适。","Anxiety, stress, sleep changes, or driving fear can appear after a collision.":"车祸后可能出现焦虑、压力、睡眠变化或驾驶恐惧。","Neck pain and stiffness may appear after whiplash, muscle strain, or joint irritation.":"挥鞭伤、肌肉拉伤或关节刺激后可能出现颈部疼痛和僵硬。",
    "Neck pain, stiffness, or whiplash symptoms may appear after collision force.":"碰撞冲击后可能出现颈部疼痛、僵硬或挥鞭伤症状。",
    "Recovery may be different for":"以下族群的康复需求可能不同：","children":"儿童","pregnant individuals":"孕期人士",", and":"，以及","seniors":"长者",
    ". Explore guidance tailored to your situation.":"。探索适合您情况的康复建议。",
    "Headaches After a Car Accident":"车祸后头痛","Back Pain After a Car Accident":"车祸后背部疼痛","Neck Pain After a Car Accident":"车祸后颈部疼痛",
    "Anxiety & Stress After a Car Accident":"车祸后的焦虑与压力"
  };

  const pages = {
    "neck-pain-after-car-accident": {
      "Recover sooner with the right assessment and ICBC treatment for neck pain after a car accident.":"通过合适的评估和 ICBC 治疗，更快缓解车祸后的颈部疼痛。",
      "Recover sooner from neck pain with the right assessment and ICBC treatment.":"通过合适的评估和 ICBC 治疗，更快缓解颈部疼痛。",
      "Neck Pain After an":"车祸后的颈部疼痛","ICBC Car Accident":"ICBC 车祸",
      "Neck pain or stiffness":"颈部疼痛或僵硬","Reduced neck movement":"颈部活动受限","Shoulder or upper back pain":"肩部或上背部疼痛","Sleep, work, or daily life affected":"睡眠、工作或日常生活受到影响",
      "Neck pain sometimes becomes worse over the first few days after a collision. An early assessment can help identify the cause of your pain and guide the most appropriate treatment before symptoms become more persistent.":"车祸后的最初几天，颈部疼痛有时会加重。尽早评估有助于找出疼痛原因，并在症状持续加重前确定更合适的治疗方案。",
      "Neck Pain Treatment Covered by ICBC":"ICBC 承保的颈部疼痛治疗","Physiotherapy for Neck Pain":"颈部疼痛物理治疗","Helps restore neck movement, reduce stiffness, and improve daily function.":"帮助恢复颈部活动、减轻僵硬并改善日常功能。",
      "After a collision, neck pain may involve muscles, joints, ligaments, nerves, or surrounding soft tissues. Because different injuries can cause similar symptoms, a professional assessment helps identify what's contributing to your pain and guide the right recovery plan.":"车祸后的颈部疼痛可能涉及肌肉、关节、韧带、神经或周围软组织。不同伤害可能出现相似症状，因此专业评估有助于找出疼痛原因并制定合适的康复计划。",
      "Many people feel fine immediately after a collision, only to notice pain and stiffness over the following days. Early physiotherapy assessment can identify underlying injuries, guide recovery, and help restore movement before symptoms become more persistent.":"许多人在车祸后当下感觉无碍，却在随后几天出现疼痛和僵硬。尽早进行物理治疗评估可以发现潜在伤害、指导康复，并在症状持续前帮助恢复活动能力。",
      "RMT for Neck Tension":"颈部紧张注册按摩治疗","Helps reduce muscle tension, soreness, and soft-tissue discomfort.":"帮助减轻肌肉紧张、酸痛和软组织不适。","Kinesiology for Neck Mobility":"改善颈部活动的运动机能治疗","Uses guided exercise to rebuild movement, strength, and confidence.":"通过指导性运动恢复活动能力、力量和信心。",
      "Neck Pain Isn't Always Just Neck Pain":"颈部疼痛不一定只影响颈部","Registered Physiotherapist":"注册物理治疗师","Clinically Reviewed Neck Pain Guidance":"经临床审核的颈部疼痛指南","Neck Pain FAQ":"颈部疼痛常见问题",
      "Why does my neck hurt if I felt fine right after the accident?":"为什么车祸后当时没事，后来颈部却开始疼？","Is my neck pain whiplash or just muscle strain?":"我的颈部疼痛是挥鞭伤还是普通肌肉拉伤？","When should I get checked urgently?":"什么情况下需要立即检查？","Should I wait and see, or start physiotherapy?":"应该先观察，还是开始物理治疗？","What happens during the first physiotherapy assessment?":"第一次物理治疗评估会做什么？","Can neck pain cause headaches, shoulder pain, or arm symptoms?":"颈部疼痛会引起头痛、肩痛或手臂症状吗？","Does ICBC cover treatment for neck pain after a car accident?":"ICBC 是否承保车祸后颈部疼痛的治疗？","How long does neck pain take to recover?":"颈部疼痛通常需要多久恢复？"
    },
    "back-pain-after-car-accident": {
      "Recover sooner from back pain with the right assessment and ICBC treatment.":"通过合适的评估和 ICBC 治疗，更快缓解背部疼痛。","Back Pain After an":"车祸后的背部疼痛",
      "Back pain or stiffness":"背部疼痛或僵硬","Reduced bending or walking tolerance":"弯腰或行走能力下降","Hip, buttock, or leg symptoms":"髋部、臀部或腿部出现症状","Sleep, work, or daily life affected":"睡眠、工作或日常生活受到影响",
      "Back pain sometimes becomes worse over the first few days after a collision. An early assessment can help identify the cause of your pain and guide the most appropriate treatment before symptoms become more persistent.":"车祸后的最初几天，背部疼痛有时会加重。尽早评估有助于找出疼痛原因，并在症状持续加重前确定更合适的治疗方案。",
      "Back Pain Treatment Covered by ICBC":"ICBC 承保的背部疼痛治疗","Chiropractic for Back Pain":"背部疼痛脊椎治疗","Helps improve spinal movement, reduce joint stiffness, and support more comfortable daily activity.":"帮助改善脊椎活动、减轻关节僵硬，让日常活动更舒适。","RMT for Back Tension":"背部紧张注册按摩治疗","Kinesiology for Back Mobility":"改善背部活动的运动机能治疗",
      "Helps reduce muscle tension, soreness, and soft-tissue discomfort after a collision.":"帮助减轻车祸后的肌肉紧张、酸痛和软组织不适。","Uses guided exercise to rebuild movement, strength, and confidence in daily activities.":"通过指导性运动恢复日常活动能力、力量和信心。",
      "It may seem natural to rest after a collision, but staying in bed for too long can actually slow recovery. Gentle movement, guided exercises, and appropriate treatment often help restore mobility, reduce stiffness, and support a faster return to daily activities.":"车祸后休息很自然，但长时间卧床反而可能减慢康复。适度活动、指导性运动和合适的治疗通常有助于恢复活动能力、减轻僵硬并更快回归日常生活。",
      "Back pain after a motor vehicle accident can vary in severity and recovery time. Prompt physical assessment and treatment help relieve pain, restore function, and support a faster, smoother recovery.":"车祸后的背部疼痛程度和恢复时间因人而异。及时进行身体评估和治疗有助于缓解疼痛、恢复功能，并促进更快、更顺利的康复。",
      "Should You Stay in Bed for Back Pain?":"背部疼痛时应该卧床休息吗？","Registered Chiropractor":"注册脊椎治疗师","Clinically Reviewed Back Pain Guidance":"经临床审核的背部疼痛指南","Back Pain FAQ":"背部疼痛常见问题",
      "Why does my back hurt if I felt fine right after the accident?":"为什么车祸后当时没事，后来背部却开始疼？","Is my back pain muscle strain, joint irritation, or nerve-related?":"我的背痛是肌肉拉伤、关节刺激还是神经问题？","Should I wait and see, or start chiropractic care?":"应该先观察，还是开始脊椎治疗？","What happens during the first chiropractic assessment?":"第一次脊椎治疗评估会做什么？","Can back pain cause hip, buttock, or leg symptoms?":"背部疼痛会引起髋部、臀部或腿部症状吗？","Does ICBC cover treatment for back pain after a car accident?":"ICBC 是否承保车祸后背部疼痛的治疗？","How long does back pain take to recover?":"背部疼痛通常需要多久恢复？"
    },
    "headaches-after-car-accident": {
      "Recover sooner from headaches with the right assessment and ICBC treatment.":"通过合适的评估和 ICBC 治疗，更快缓解头痛。","Headaches After an":"车祸后的头痛",
      "New or worsening headaches":"新出现或不断加重的头痛","Dizziness, nausea, or light sensitivity":"头晕、恶心或畏光","Neck tension or pain behind the eyes":"颈部紧张或眼后疼痛","Sleep, focus, work, or daily life affected":"睡眠、专注、工作或日常生活受到影响",
      "Headaches can appear hours or days after a collision and may be related to neck strain, whiplash, concussion, or muscle tension. An early assessment can help identify warning signs and guide the safest, most appropriate treatment.":"头痛可能在车祸数小时或数天后出现，原因可能与颈部拉伤、挥鞭伤、脑震荡或肌肉紧张有关。尽早评估有助于识别警示症状，并确定更安全合适的治疗。",
      "Headache Treatment Covered by ICBC":"ICBC 承保的头痛治疗","Acupuncture for Headaches":"头痛针灸治疗","Relieves muscle tension, improves circulation, and helps reduce headache pain after a car accident.":"缓解肌肉紧张、改善循环，并帮助减轻车祸后的头痛。","Physiotherapy for Headaches":"头痛物理治疗","Addresses neck-related headache triggers, movement limits, and muscle tension.":"处理与颈部有关的头痛诱因、活动受限和肌肉紧张。","RMT for Headache Tension":"头痛相关紧张的注册按摩治疗",
      "Helps reduce tension in the neck, shoulders, and surrounding soft tissues.":"帮助减轻颈部、肩部及周围软组织的紧张。","Post-accident headaches may come from whiplash, irritated neck joints or muscles, stress, migraine, or concussion. Because these conditions can feel similar, a professional assessment helps identify what may be contributing and whether medical evaluation is needed.":"车祸后的头痛可能来自挥鞭伤、颈部关节或肌肉刺激、压力、偏头痛或脑震荡。由于这些情况感觉相似，专业评估有助于找出原因并判断是否需要医疗检查。",
      "Recovery after a collision involves more than treating pain. Muscle tension, disrupted sleep, stress, and headaches can all affect healing. Acupuncture can be integrated into your recovery plan to help reduce symptoms, improve well-being, and support your return to daily activities.":"车祸后的康复不只是处理疼痛。肌肉紧张、睡眠中断、压力和头痛都会影响恢复。针灸可以纳入康复计划，帮助减轻症状、改善整体状态并支持您回归日常生活。",
      "Not Every Headache Has the Same Cause":"并非所有头痛的原因都相同","Registered Acupuncturist":"注册针灸师","Clinically Reviewed Headache Guidance":"经临床审核的头痛指南","Headaches FAQ":"头痛常见问题",
      "Why did my headache start hours or days after the accident?":"为什么头痛在车祸数小时或数天后才出现？","Is my headache from whiplash or a concussion?":"我的头痛来自挥鞭伤还是脑震荡？","Should I wait and see, or start acupuncture?":"应该先观察，还是开始针灸治疗？","What happens during the first acupuncture appointment?":"第一次针灸治疗会做什么？","Can neck strain or whiplash cause headaches?":"颈部拉伤或挥鞭伤会引起头痛吗？","Does ICBC cover treatment for headaches after a car accident?":"ICBC 是否承保车祸后头痛的治疗？","How long do post-accident headaches last?":"车祸后的头痛通常会持续多久？"
    },
    "anxiety-after-car-accident": {
      "Anxiety After a Car Accident | ICBC Recovery Vancouver & Richmond":"车祸后焦虑｜ICBC 康复－温哥华及列治文","Anxiety After an":"车祸后的焦虑","Feel safer, sleep better, and rebuild confidence after a collision with the right mental health support.":"通过合适的心理健康支持，在车祸后恢复安全感、改善睡眠并重建信心。","Recover sooner from anxiety with the right assessment and ICBC treatment.":"通过合适的评估和 ICBC 治疗，更快缓解焦虑。",
      "Anxious getting into a car":"坐进车内时感到焦虑","Avoiding driving":"逃避驾驶","Nightmares or flashbacks":"噩梦或闪回","Sleep, work, or daily life affected":"睡眠、工作或日常生活受到影响",
      "Early support isn't only about reducing symptoms. It also helps identify the right treatment and recovery plan before symptoms begin affecting daily life.":"尽早获得支持不仅能减轻症状，也能在症状影响日常生活前确定合适的治疗和康复计划。",
      "Anxiety Treatment Covered by ICBC":"ICBC 承保的焦虑治疗","Clinical Counselling":"临床心理咨询","Individual counselling to help with anxiety, stress, driving fear, sleep problems, and emotional recovery after a motor vehicle accident.":"通过一对一咨询，帮助处理车祸后的焦虑、压力、驾驶恐惧、睡眠问题和情绪康复。","Family Therapy (Children)":"儿童家庭治疗","Support children and parents together after a collision, helping families understand emotional changes and recover with confidence.":"在车祸后同时支持儿童和家长，帮助家庭理解情绪变化并更有信心地康复。","Virtual Clinical Counselling":"线上临床心理咨询","Receive one-on-one counselling remotely with the same clinical support, making it easier to continue treatment from home.":"通过线上方式接受同等的一对一临床支持，更方便在家继续治疗。","Family Therapy for Children":"儿童家庭治疗",
      "When a child is involved in a collision, recovery may include family counselling as part of the treatment plan. Family therapy helps parents better understand their child's emotional changes and support recovery together at home.":"儿童遇到车祸时，康复计划可能包括家庭心理咨询。家庭治疗可以帮助家长理解孩子的情绪变化，并在家中共同支持康复。","Recovery after a collision involves more than treating pain. Muscle tension, disrupted sleep, stress, and headaches can all affect healing. Acupuncture can be integrated into your recovery plan to help reduce symptoms, improve well-being, and support your return to daily activities.":"车祸后的康复不只涉及疼痛治疗。肌肉紧张、睡眠中断、压力和头痛都会影响恢复。合适的治疗可帮助减轻症状、改善身心状态并支持回归日常生活。",
      "The right treatment depends on your symptoms and clinical assessment. Depending on your recovery needs, eligible ICBC customers may access pre-approved counselling or psychology treatment during the first 12 weeks after a crash.":"合适的治疗取决于您的症状和临床评估。根据康复需要，符合资格的 ICBC 客户可在车祸后的前 12 周内接受预先批准的心理咨询或心理治疗。",
      "Registered Clinical Counsellor":"注册临床心理咨询师","Clinically Reviewed Anxiety Guidance":"经临床审核的焦虑指南","Anxiety FAQ":"焦虑常见问题","Is anxiety normal after a car accident?":"车祸后感到焦虑正常吗？","What can post-accident anxiety feel like?":"车祸后的焦虑可能有哪些表现？","Why did anxiety start days after the crash?":"为什么焦虑在车祸几天后才出现？","When should I seek urgent help?":"什么情况下需要立即寻求帮助？","Can counselling help with driving anxiety?":"心理咨询能帮助缓解驾驶焦虑吗？","What happens during a first counselling appointment?":"第一次心理咨询会进行什么？","Does ICBC cover counselling or psychology?":"ICBC 是否承保心理咨询或心理治疗？","How long does anxiety after a crash last?":"车祸后的焦虑通常会持续多久？"
    }
  };

  const slug = location.pathname.split("/").filter(Boolean).pop();
  const dictionary = Object.assign({}, common, pages[slug] || {});
  const titles = {"neck-pain-after-car-accident":"车祸后颈部疼痛｜温哥华与列治文","back-pain-after-car-accident":"车祸后背部疼痛｜温哥华与列治文","headaches-after-car-accident":"车祸后头痛｜温哥华与列治文","anxiety-after-car-accident":"车祸后焦虑｜温哥华与列治文"};
  if (titles[slug]) document.title = titles[slug];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);
  textNodes.forEach(function (node) {
    const value = node.nodeValue.trim();
    if (dictionary[value]) node.nodeValue = node.nodeValue.replace(value, dictionary[value]);
  });

  document.querySelectorAll('a[href^="/symptoms/"]').forEach(function (link) {
    if (link.textContent.trim() !== "English") link.href = "/zh" + link.getAttribute("href");
  });
  document.querySelectorAll('a').forEach(function (link) {
    if (link.textContent.trim() === "English") link.href = "/symptoms/" + slug + "/";
  });
  document.querySelectorAll('[data-home-link]').forEach(function (link) {
    const target = link.getAttribute('data-home-link');
    link.href = target === 'assessment' ? '/zh/#assessment' : '/zh/#' + target;
  });
})();
