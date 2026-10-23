-- ============================================================
-- 08-update-insurance-products.sql
-- Cập nhật 3 sản phẩm bảo hiểm:
--   1. IUL Secrets     -> Medicare (iul_reasons, iul_steps, iul_faqs, page_content: insurance_iul)
--   2. IUL Cho Trẻ     -> ACA Marketplace (kid_iul_benefits, page_content: insurance_kid_iul)
--   3. Term Life       -> Auto Insurance (termlife_benefits, page_content: insurance_termlife)
-- Chạy toàn bộ file này trong Supabase SQL Editor.
-- ============================================================

-- ────────────────────────────────────────────────────────────
-- 1. MEDICARE (bảng iul_reasons, iul_steps, iul_faqs + page_content)
-- ────────────────────────────────────────────────────────────

delete from public.iul_reasons;
insert into public.iul_reasons (icon, title_en, title_vi, description_en, description_vi, sort_order, active) values
  (
    'ℹ️',
    'What Is Medicare?',
    'Medicare Là Gì?',
    'Medicare is the federal health insurance program in the United States, primarily for people age 65 or older. Certain younger people may also qualify due to disabilities or specific medical conditions. Medicare helps cover eligible medical services such as hospital stays, doctor visits, preventive services, and other healthcare needs depending on coverage.',
    'Medicare là chương trình bảo hiểm sức khỏe liên bang của Hoa Kỳ, chủ yếu dành cho người từ 65 tuổi trở lên. Một số người trẻ hơn cũng có thể đủ điều kiện tham gia do tình trạng khuyết tật hoặc một số bệnh lý nhất định. Medicare hỗ trợ chi trả các dịch vụ y tế đủ điều kiện như điều trị tại bệnh viện, khám bác sĩ, dịch vụ phòng ngừa và các nhu cầu chăm sóc sức khỏe khác, tùy theo phạm vi bảo hiểm.',
    1,
    true
  ),
  (
    '🏥',
    'Hospital & Medical Coverage',
    'Bảo Hiểm Bệnh Viện & Dịch Vụ Y Tế',
    'Medicare helps pay for eligible services such as inpatient hospital care, doctor visits, outpatient care, and preventive services. Coverage and out-of-pocket costs depend on your Medicare plan and the services you use.',
    'Medicare hỗ trợ chi trả các dịch vụ đủ điều kiện như điều trị tại bệnh viện, khám bác sĩ, chăm sóc ngoại trú và dịch vụ phòng ngừa. Phạm vi bảo hiểm và chi phí tự thanh toán tùy thuộc vào chương trình Medicare và dịch vụ bạn sử dụng.',
    2,
    true
  ),
  (
    '💊',
    'Prescription Drug Coverage',
    'Bảo Hiểm Thuốc Kê Toa',
    'Medicare prescription drug coverage can help pay for eligible medications through Part D or certain Medicare Advantage plans. Covered formularies and costs vary by plan.',
    'Quyền lợi thuốc kê toa của Medicare có thể hỗ trợ chi trả các loại thuốc đủ điều kiện thông qua Part D hoặc một số chương trình Medicare Advantage. Danh mục thuốc được bảo hiểm và chi phí tùy thuộc vào từng chương trình.',
    3,
    true
  ),
  (
    '🎁',
    'Additional Benefits',
    'Quyền Lợi Bổ Sung',
    'Some Medicare Advantage plans may offer extra benefits such as dental, vision, hearing, and over-the-counter (OTC) allowances. Benefits, limits, and eligibility depend on the specific plan.',
    'Một số chương trình Medicare Advantage có thể cung cấp thêm quyền lợi nha khoa, thị lực, thính lực và trợ cấp mua sản phẩm không kê đơn (OTC). Quyền lợi, hạn mức và điều kiện áp dụng tùy thuộc vào từng chương trình.',
    4,
    true
  ),
  (
    '🤝',
    'Personalized Medicare Guidance',
    'Hướng Dẫn Medicare Theo Nhu Cầu',
    'Everyone has different healthcare needs. VietPoint provides Vietnamese-language support to help you explore Medicare options, check your doctors and prescriptions, and guide you through enrollment.',
    'Mỗi người có nhu cầu chăm sóc sức khỏe khác nhau. VietPoint hỗ trợ bằng tiếng Việt, giúp bạn tìm hiểu các lựa chọn Medicare, kiểm tra bác sĩ và thuốc kê toa, đồng thời hướng dẫn quy trình đăng ký.',
    5,
    true
  ),
  (
    '❤️',
    'Preventive Care & Wellness',
    'Chăm Sóc Phòng Ngừa & Sức Khỏe',
    'Medicare Part B covers many eligible preventive services, screenings, and wellness visits to help you monitor your health and detect potential health issues early.',
    'Medicare Part B chi trả nhiều dịch vụ phòng ngừa, xét nghiệm sàng lọc và buổi thăm khám sức khỏe đủ điều kiện, giúp bạn theo dõi sức khỏe và phát hiện sớm những vấn đề sức khỏe tiềm ẩn.',
    6,
    true
  );

delete from public.iul_steps;
insert into public.iul_steps (step_label, title_en, title_vi, description_en, description_vi, sort_order, active) values
  (
    'STEP 1',
    'Free Consultation',
    'Liên Hệ VietPoint',
    'Leave your contact information or call us to discuss your Medicare questions and healthcare needs.',
    'Để lại thông tin liên hệ hoặc gọi cho chúng tôi để trao đổi về thắc mắc Medicare và nhu cầu chăm sóc sức khỏe của bạn.',
    1,
    true
  ),
  (
    'STEP 2',
    'Personalized Guidance',
    'Tư Vấn Medicare Theo Nhu Cầu',
    'An agent will contact you within 24 hours to understand your needs, explain available options, and answer your questions.',
    'Tư vấn viên sẽ liên hệ với bạn trong vòng 24 giờ để tìm hiểu nhu cầu, giải thích các lựa chọn hiện có và giải đáp thắc mắc.',
    2,
    true
  ),
  (
    'STEP 3',
    'Review Your Options',
    'Xem Xét Các Lựa Chọn',
    'Work with your agent to review plan details, benefits, costs, doctors, and prescription drugs before making a decision.',
    'Cùng tư vấn viên xem xét thông tin chương trình, quyền lợi, chi phí, bác sĩ và thuốc kê toa trước khi đưa ra quyết định.',
    3,
    true
  ),
  (
    'STEP 4',
    'Enrollment & Confirmation',
    'Đăng Ký & Xác Nhận',
    'Your agent will guide you through the enrollment process. VietPoint will send confirmation once the process is complete and confirmation details are available.',
    'Tư vấn viên sẽ hướng dẫn bạn trong quá trình đăng ký. VietPoint sẽ gửi xác nhận sau khi quy trình hoàn tất và có thông tin xác nhận.',
    4,
    true
  ),
  (
    'STEP 5',
    'Ongoing Support',
    'Hỗ Trợ Sau Đăng Ký',
    'Have questions about your benefits, medical bills, or coverage? Contact VietPoint for support in Vietnamese.',
    'Bạn có thắc mắc về quyền lợi bảo hiểm, hóa đơn y tế hoặc phạm vi bảo hiểm? Hãy liên hệ VietPoint để được hỗ trợ bằng tiếng Việt.',
    5,
    true
  );

delete from public.iul_faqs;
insert into public.iul_faqs (question_en, question_vi, answer_en, answer_vi, sort_order, active) values
  (
    'What is Medicare?',
    'Medicare là gì?',
    'Medicare is the federal health insurance program in the United States, primarily for people age 65 or older. Certain younger people may also qualify due to disabilities or specific medical conditions.',
    'Medicare là chương trình bảo hiểm sức khỏe liên bang của Hoa Kỳ, chủ yếu dành cho người từ 65 tuổi trở lên. Một số người trẻ hơn cũng có thể đủ điều kiện do tình trạng khuyết tật hoặc một số bệnh lý nhất định.',
    1,
    true
  ),
  (
    'Who is eligible for Medicare?',
    'Ai có thể đủ điều kiện tham gia Medicare?',
    'Most people qualify when they turn 65, but eligibility and enrollment also depend on factors such as age, disability status, and work history.',
    'Phần lớn mọi người đủ điều kiện khi đến 65 tuổi, nhưng điều kiện tham gia và đăng ký còn phụ thuộc vào các yếu tố như độ tuổi, tình trạng khuyết tật và quá trình làm việc.',
    2,
    true
  ),
  (
    'Does Medicare cover all medical expenses?',
    'Medicare có chi trả tất cả chi phí y tế không?',
    'No. Coverage depends on the Medicare plan and the services you use. You may have to pay premiums, deductibles, copayments, or coinsurance, and some services may not be covered.',
    'Không. Phạm vi chi trả tùy thuộc vào chương trình Medicare và dịch vụ bạn sử dụng. Bạn có thể phải trả phí bảo hiểm, khoản khấu trừ, đồng thanh toán hoặc đồng bảo hiểm; một số dịch vụ cũng có thể không được chi trả.',
    3,
    true
  ),
  (
    'Does Medicare include dental and vision benefits?',
    'Medicare có quyền lợi nha khoa và thị lực không?',
    'Original Medicare generally does not cover routine dental care or routine eye exams for glasses. Some Medicare Advantage plans may offer these additional benefits.',
    'Original Medicare thường không chi trả dịch vụ nha khoa thông thường hoặc khám thị lực định kỳ để làm kính. Một số chương trình Medicare Advantage có thể cung cấp thêm các quyền lợi này.',
    4,
    true
  ),
  (
    'Can I check if my doctors and prescriptions are covered?',
    'Tôi có thể kiểm tra bác sĩ và thuốc của mình có được bảo hiểm không?',
    'Yes. VietPoint can help check your doctors, hospitals, and prescription drugs under the plans you are considering. Provider networks and drug formularies may change.',
    'Có. VietPoint có thể hỗ trợ kiểm tra bác sĩ, bệnh viện và thuốc kê toa theo chương trình bạn đang cân nhắc. Mạng lưới bác sĩ và phạm vi chi trả thuốc có thể thay đổi.',
    5,
    true
  ),
  (
    'How can VietPoint help me with Medicare?',
    'VietPoint có thể hỗ trợ tôi về Medicare như thế nào?',
    'Our Vietnamese-speaking team can help you explore Medicare options, review plan benefits, check your doctors and prescriptions, and guide you through the enrollment process.',
    'Đội ngũ hỗ trợ bằng tiếng Việt của chúng tôi có thể giúp bạn tìm hiểu các lựa chọn Medicare, xem xét quyền lợi bảo hiểm, kiểm tra bác sĩ và thuốc kê toa, cũng như hướng dẫn quy trình đăng ký.',
    6,
    true
  );

delete from public.page_content where page = 'insurance_iul';
insert into public.page_content (page, section, field, value_en, value_vi) values
  ('insurance_iul', 'hero',     'sub',         'MEDICARE',                                        'MEDICARE'),
  ('insurance_iul', 'hero',     'h1',          'UNDERSTAND YOUR',                                 'TÌM HIỂU CÁC LỰA CHỌN'),
  ('insurance_iul', 'hero',     'h2',          'MEDICARE OPTIONS',                                'BẢO HIỂM MEDICARE'),
  ('insurance_iul', 'hero',     'cta',         'GET MEDICARE HELP',                               'NHẬN HỖ TRỢ MEDICARE'),
  ('insurance_iul', 'sections', 'reasons_h1',  'WHY CHOOSE VIETPOINT',                            'TÌM HIỂU VỀ MEDICARE'),
  ('insurance_iul', 'sections', 'diseases_h1', 'MEDICARE BENEFITS & SUPPORT',                     'QUYỀN LỢI & HỖ TRỢ MEDICARE'),
  ('insurance_iul', 'quote',    'h1',          'GET PERSONALIZED',                                'NHẬN HƯỚNG DẪN'),
  ('insurance_iul', 'quote',    'h2',          'MEDICARE GUIDANCE',                               'MEDICARE THEO NHU CẦU'),
  ('insurance_iul', 'quote',    'or',          'Or call us directly',                             'Hoặc gọi trực tiếp cho chúng tôi'),
  ('insurance_iul', 'sections', 'steps_h1',    '3 SIMPLE STEPS TO GET STARTED',                   'QUY TRÌNH LÀM VIỆC VỚI VIETPOINT'),
  ('insurance_iul', 'sections', 'faq_h1',      'MEDICARE FAQs',                                   'CÂU HỎI THƯỜNG GẶP VỀ MEDICARE'),
  ('insurance_iul', 'cta',      'h1',          'Get Help Understanding Your Medicare Options',    'Nhận Hỗ Trợ Tìm Hiểu Các Lựa Chọn Medicare Của Bạn')
on conflict (page, section, field) do update set
  value_en = excluded.value_en,
  value_vi = excluded.value_vi,
  updated_at = now();

-- ────────────────────────────────────────────────────────────
-- 2. ACA MARKETPLACE (bảng kid_iul_benefits + page_content: insurance_kid_iul)
-- ────────────────────────────────────────────────────────────

delete from public.kid_iul_benefits;
insert into public.kid_iul_benefits (icon, title_en, title_vi, description_en, description_vi, sort_order, active) values
  (
    '🏥',
    'Essential Health Benefits',
    'Quyền lợi sức khỏe thiết yếu',
    'ACA Marketplace plans cover essential health benefits, including many doctor visits, hospitalization, prescription drugs, preventive care, and more, subject to plan terms.',
    'Các chương trình ACA Marketplace chi trả các quyền lợi sức khỏe thiết yếu, bao gồm nhiều dịch vụ khám bác sĩ, nằm viện, thuốc kê toa, chăm sóc phòng ngừa và các dịch vụ khác theo điều khoản chương trình.',
    1,
    true
  ),
  (
    '👨‍👩‍👧‍👦',
    'Coverage for Individuals & Families',
    'Bảo hiểm cho cá nhân và gia đình',
    'Explore coverage options for yourself and eligible household members based on your needs and circumstances.',
    'Tìm hiểu các lựa chọn bảo hiểm cho bản thân và các thành viên đủ điều kiện trong gia đình dựa trên nhu cầu và hoàn cảnh của bạn.',
    2,
    true
  ),
  (
    '🛡️',
    'Preventive Care Services',
    'Dịch vụ chăm sóc phòng ngừa',
    'Marketplace plans generally cover many recommended preventive services at no cost when received in-network, subject to applicable requirements.',
    'Các chương trình Marketplace thường chi trả nhiều dịch vụ phòng ngừa được khuyến nghị mà không thu phí khi sử dụng trong mạng lưới, tùy theo các điều kiện áp dụng.',
    3,
    true
  ),
  (
    '📋',
    'Enrollment & Renewal Assistance',
    'Hỗ trợ đăng ký và gia hạn',
    'Get guidance with enrollment, annual plan reviews, and updating your information when your circumstances change.',
    'Được hướng dẫn đăng ký, xem xét chương trình hằng năm và cập nhật thông tin khi hoàn cảnh của bạn thay đổi.',
    4,
    true
  ),
  (
    '🤝',
    'Vietnamese-Language Support',
    'Hỗ trợ bằng tiếng Việt',
    'Get help understanding plan details, estimated costs, and enrollment steps from a team that speaks Vietnamese.',
    'Được hỗ trợ tìm hiểu quyền lợi, chi phí dự kiến và các bước đăng ký từ đội ngũ có thể trao đổi bằng tiếng Việt.',
    5,
    true
  );

delete from public.page_content where page = 'insurance_kid_iul';
insert into public.page_content (page, section, field, value_en, value_vi) values
  ('insurance_kid_iul', 'hero', 'title',       'ACA Marketplace Health Insurance', 'Bảo Hiểm Sức Khỏe ACA Marketplace'),
  ('insurance_kid_iul', 'hero', 'cta',         'Get Free Quote',                   'Nhận Tư Vấn Miễn Phí'),
  ('insurance_kid_iul', 'hero', 'desc',        'Explore ACA Marketplace health insurance options with Vietnamese-language support. VietPoint helps you understand coverage, estimated costs, and available financial assistance based on your circumstances.', 'Tìm hiểu các lựa chọn bảo hiểm sức khỏe ACA Marketplace với sự hỗ trợ bằng tiếng Việt. VietPoint giúp bạn hiểu rõ quyền lợi, chi phí dự kiến và khả năng đủ điều kiện nhận hỗ trợ tài chính tùy theo hoàn cảnh.'),
  ('insurance_kid_iul', 'how',  'h',           'How It Works',                     'Quy Trình Hỗ Trợ'),
  ('insurance_kid_iul', 'how',  'desc',        'VietPoint guides you through the ACA Marketplace enrollment process, from understanding your needs and reviewing available plans to completing your application and receiving enrollment confirmation.', 'VietPoint đồng hành cùng bạn trong quá trình đăng ký ACA Marketplace, từ tìm hiểu nhu cầu, xem xét các chương trình hiện có đến hoàn tất hồ sơ và nhận xác nhận đăng ký.'),
  ('insurance_kid_iul', 'how',  'step1_title', 'Free Consultation',                'Tư vấn miễn phí'),
  ('insurance_kid_iul', 'how',  'step1_desc',  'Contact VietPoint and tell us about your household, healthcare needs, and estimated income.', 'Liên hệ VietPoint và chia sẻ thông tin hộ gia đình, nhu cầu chăm sóc sức khỏe và thu nhập dự kiến.'),
  ('insurance_kid_iul', 'how',  'step2_title', 'Review Your Options',              'Xem xét các lựa chọn'),
  ('insurance_kid_iul', 'how',  'step2_desc',  'Review available plans, estimated premiums, deductibles, provider networks, and potential financial assistance.', 'Xem xét các chương trình hiện có, phí bảo hiểm dự kiến, khoản khấu trừ, mạng lưới bác sĩ và khả năng nhận hỗ trợ tài chính.'),
  ('insurance_kid_iul', 'how',  'step3_title', 'Complete Your Application',        'Hoàn tất hồ sơ đăng ký'),
  ('insurance_kid_iul', 'how',  'step3_desc',  'Provide the required information and complete your Marketplace application with guidance from your agent.', 'Cung cấp thông tin cần thiết và hoàn tất hồ sơ Marketplace với sự hướng dẫn của tư vấn viên.'),
  ('insurance_kid_iul', 'how',  'step4_title', 'Enrollment Confirmation',          'Xác nhận đăng ký'),
  ('insurance_kid_iul', 'how',  'step4_desc',  'Review your enrollment confirmation and follow any instructions provided by the insurance company, including premium payment if required.', 'Kiểm tra xác nhận đăng ký và thực hiện các hướng dẫn từ công ty bảo hiểm, bao gồm thanh toán phí nếu được yêu cầu.'),
  ('insurance_kid_iul', 'how',  'step5_title', 'Ongoing Support',                  'Hỗ trợ sau đăng ký'),
  ('insurance_kid_iul', 'how',  'step5_desc',  'Contact VietPoint if you have questions about your coverage, premium payments, medical bills, or updating your Marketplace information.', 'Liên hệ VietPoint nếu bạn có thắc mắc về quyền lợi bảo hiểm, thanh toán phí, hóa đơn y tế hoặc cập nhật thông tin Marketplace.'),
  ('insurance_kid_iul', 'cta',  'h',           'Get Help Finding the Right Coverage', 'Nhận Hỗ Trợ Tìm Bảo Hiểm Phù Hợp'),
  ('insurance_kid_iul', 'cta',  'sub',         'Contact VietPoint today for free consultation in Vietnamese.', 'Liên hệ VietPoint ngay hôm nay để được tư vấn hoàn toàn miễn phí bằng tiếng Việt.')
on conflict (page, section, field) do update set
  value_en = excluded.value_en,
  value_vi = excluded.value_vi,
  updated_at = now();

-- ────────────────────────────────────────────────────────────
-- 3. AUTO INSURANCE (bảng termlife_benefits + page_content: insurance_termlife)
-- ────────────────────────────────────────────────────────────

delete from public.termlife_benefits;
insert into public.termlife_benefits (icon, title_en, title_vi, description_en, description_vi, sort_order, active) values
  (
    '🛡️',
    'Liability Coverage',
    'Bảo hiểm trách nhiệm dân sự',
    'Helps cover eligible costs if you are legally responsible for injuries to others or damage to their property in a covered accident, subject to policy limits.',
    'Hỗ trợ chi trả các chi phí đủ điều kiện nếu bạn chịu trách nhiệm pháp lý về thương tích của người khác hoặc thiệt hại tài sản trong tai nạn thuộc phạm vi bảo hiểm, theo giới hạn hợp đồng.',
    1,
    true
  ),
  (
    '🚗',
    'Collision Coverage',
    'Bảo hiểm va chạm',
    'Helps pay for covered damage to your vehicle after a collision with another vehicle or object, subject to your deductible and policy terms.',
    'Hỗ trợ chi trả thiệt hại thuộc phạm vi bảo hiểm đối với xe của bạn sau khi va chạm với xe khác hoặc vật thể, tùy khoản khấu trừ và điều khoản hợp đồng.',
    2,
    true
  ),
  (
    '🌩️',
    'Comprehensive Coverage',
    'Bảo hiểm thiệt hại ngoài va chạm',
    'Helps cover certain non-collision losses, such as theft, vandalism, hail, or falling objects, when included in your policy.',
    'Hỗ trợ chi trả một số thiệt hại không do va chạm như trộm cắp, phá hoại, mưa đá hoặc vật thể rơi trúng xe, nếu được bao gồm trong hợp đồng.',
    3,
    true
  ),
  (
    '💰',
    'Coverage Options for Your Budget',
    'Lựa chọn bảo hiểm theo ngân sách',
    'Compare available coverage options, deductibles, and premiums to find a policy that fits your needs and budget.',
    'So sánh các lựa chọn bảo hiểm, khoản khấu trừ và phí bảo hiểm để tìm hợp đồng phù hợp với nhu cầu và ngân sách của bạn.',
    4,
    true
  ),
  (
    '📋',
    'Personalized Quote Assistance',
    'Hỗ trợ tìm báo giá phù hợp',
    'Get assistance reviewing available quotes and understanding policy terms, coverage limits, and deductibles.',
    'Được hỗ trợ xem xét các báo giá hiện có và tìm hiểu điều khoản hợp đồng, giới hạn bảo hiểm và khoản khấu trừ.',
    5,
    true
  ),
  (
    '🤝',
    'Vietnamese-Language Support',
    'Hỗ trợ bằng tiếng Việt',
    'Our Vietnamese-speaking team can help you understand your auto insurance options and guide you through the quoting process.',
    'Đội ngũ hỗ trợ bằng tiếng Việt giúp bạn hiểu rõ các lựa chọn bảo hiểm xe và hướng dẫn quy trình nhận báo giá.',
    6,
    true
  );

delete from public.page_content where page = 'insurance_termlife';
insert into public.page_content (page, section, field, value_en, value_vi) values
  ('insurance_termlife', 'hero',     'title',      'AUTO INSURANCE',                             'BẢO HIỂM XE HƠI'),
  ('insurance_termlife', 'hero',     'cta',        'GET A FREE QUOTE',                           'NHẬN BÁO GIÁ MIỄN PHÍ'),
  ('insurance_termlife', 'hero',     'desc',       'Looking for auto insurance? VietPoint helps you explore coverage options, understand policy details, and find coverage that fits your needs and budget. Our Vietnamese-speaking team is here to make the process easier.', 'Bạn đang tìm bảo hiểm xe hơi? VietPoint hỗ trợ bạn tìm hiểu các lựa chọn bảo hiểm, giải thích điều khoản hợp đồng và tìm gói bảo hiểm phù hợp với nhu cầu và ngân sách. Đội ngũ hỗ trợ bằng tiếng Việt luôn sẵn sàng giúp bạn thực hiện quy trình dễ dàng hơn.'),
  ('insurance_termlife', 'sections', 'benefits_h', 'Why Choose Auto Insurance?',                 'Vì Sao Nên Có Bảo Hiểm Xe Hơi?'),
  ('insurance_termlife', 'sections', 'compare_h',  'Understanding Your Auto Coverage Options',   'Tìm Hiểu Các Quyền Lợi Bảo Hiểm Xe'),
  ('insurance_termlife', 'cta',      'h',          'Get Your Free Auto Insurance Quote',         'Nhận Báo Giá Bảo Hiểm Xe Miễn Phí'),
  ('insurance_termlife', 'cta',      'sub',        'Our team is ready to help you explore auto insurance options and understand your coverage. Contact VietPoint today for a free quote.', 'Đội ngũ VietPoint sẵn sàng hỗ trợ bạn tìm hiểu các lựa chọn bảo hiểm xe và quyền lợi bảo hiểm. Liên hệ với chúng tôi ngay hôm nay để nhận báo giá miễn phí.')
on conflict (page, section, field) do update set
  value_en = excluded.value_en,
  value_vi = excluded.value_vi,
  updated_at = now();
