-- ============================================================
-- VietPoint Insurance & Tax — Supabase Seed Data
-- FILE 4 of 4: SAMPLE DATA (CUSTOMER CARE)
-- Run AFTER: 01-schema.sql, 02-rls-grants.sql, 03-migration.sql
-- Safe to re-run: uses ON CONFLICT DO NOTHING
-- ============================================================

-- ============================================================
-- CLAIMS STEPS — 5 bước quy trình bồi thường
-- ============================================================

insert into claims_steps (num, title_en, title_vi, description_en, description_vi, sort_order, active) values
  ('01',
   'Contact Us & Report Your Claim',
   'Liên Hệ & Báo Cáo Khiếu Nại',
   'Call or email our team as soon as possible after the incident. We will open your case and guide you on next steps.',
   'Gọi điện hoặc gửi email cho đội ngũ của chúng tôi ngay sau khi sự cố xảy ra. Chúng tôi sẽ mở hồ sơ và hướng dẫn bạn các bước tiếp theo.',
   1, true),
  ('02',
   'Gather Required Documents',
   'Thu Thập Giấy Tờ Cần Thiết',
   'Prepare your policy number, government-issued ID, incident report, medical records (if applicable), and any supporting evidence.',
   'Chuẩn bị số hợp đồng bảo hiểm, CMND/CCCD, biên bản sự cố, hồ sơ y tế (nếu có) và các tài liệu liên quan.',
   2, true),
  ('03',
   'Submit the Claim Form',
   'Nộp Đơn Yêu Cầu Bồi Thường',
   'Complete and sign the official claim form provided by the insurance company. Our agents can help you fill it out accurately.',
   'Điền và ký vào mẫu yêu cầu bồi thường chính thức của công ty bảo hiểm. Chuyên viên của chúng tôi có thể hỗ trợ bạn điền chính xác.',
   3, true),
  ('04',
   'Our Team Reviews Your Case',
   'Đội Ngũ Xem Xét Hồ Sơ',
   'A dedicated VietPoint specialist follows up with the insurer on your behalf, ensuring your claim is processed promptly and fairly.',
   'Chuyên viên VietPoint theo dõi với công ty bảo hiểm thay mặt bạn, đảm bảo hồ sơ được xử lý nhanh chóng và công bằng.',
   4, true),
  ('05',
   'Receive Your Settlement',
   'Nhận Tiền Bồi Thường',
   'Once approved, the insurance company disburses the settlement directly to you or your designated beneficiary. We stay with you until the end.',
   'Sau khi được phê duyệt, công ty bảo hiểm sẽ giải ngân trực tiếp cho bạn hoặc người thụ hưởng được chỉ định. Chúng tôi đồng hành cùng bạn đến cùng.',
   5, true)
on conflict do nothing;

-- ============================================================
-- CUSTOMER STORIES — 3 câu chuyện khách hàng
-- ============================================================

insert into customer_stories (name, location_en, location_vi, amount, story_en, story_vi, tag_en, tag_vi, tag_color, active) values
  ('Minh Nguyen',
   'Houston, TX',
   'Houston, Texas',
   '$180,000',
   'After my father passed away unexpectedly, I was worried about how our family would manage. Thanks to the IUL policy VietPoint set up for him, we received $180,000 within 30 days. The team held our hand through every step of the claim process.',
   'Sau khi ba tôi qua đời đột ngột, tôi lo không biết gia đình sẽ xoay xở thế nào. Nhờ hợp đồng IUL mà VietPoint đã tư vấn cho ba, chúng tôi nhận được $180,000 trong vòng 30 ngày. Đội ngũ hỗ trợ chúng tôi từng bước trong quá trình khiếu nại.',
   'IUL Death Benefit', 'Quyền Lợi IUL', '#2F5E9E', true),
  ('Lan Tran',
   'Atlanta, GA',
   'Atlanta, Georgia',
   '$250,000',
   'When my husband was diagnosed with a critical illness, I did not know where to turn. VietPoint helped us file a living benefit claim quickly. We received $250,000 that covered treatment and kept our family afloat during the hardest year of our lives.',
   'Khi chồng tôi được chẩn đoán bệnh hiểm nghèo, tôi không biết phải làm gì. VietPoint đã giúp chúng tôi nộp hồ sơ quyền lợi sống nhanh chóng. Chúng tôi nhận $250,000 để trang trải điều trị và duy trì cuộc sống qua năm khó khăn nhất.',
   'Living Benefits', 'Quyền Lợi Sống', '#0d7377', true),
  ('The Pham Family',
   'Orlando, FL',
   'Orlando, Florida',
   '$45,000',
   'We started a Kid IUL for our daughter when she was 3. By the time she turned 18, the policy had accumulated $45,000 in cash value — fully funding her first year of college tuition. Best decision we ever made.',
   'Chúng tôi mở hợp đồng Kid IUL cho con gái khi bé mới 3 tuổi. Đến năm 18 tuổi, hợp đồng đã tích lũy $45,000 giá trị tiền mặt — đủ chi trả toàn bộ năm học đại học đầu tiên. Quyết định đúng đắn nhất chúng tôi từng đưa ra.',
   'Kid IUL Savings', 'Tiết Kiệm Kid IUL', '#e67e22', true)
on conflict do nothing;

-- ============================================================
-- MANUAL GUIDES — 4 bài hướng dẫn sử dụng
-- ============================================================

insert into manual_guides (title_en, title_vi, date_label, description_en, description_vi, tag_en, tag_vi, active) values
  ('How to Make a Policy Change',
   'Cách Thay Đổi Hợp Đồng Bảo Hiểm',
   'May 2025',
   'Learn how to update your coverage amount, add riders, change your payment method, or update beneficiary information on your existing policy.',
   'Tìm hiểu cách cập nhật số tiền bảo hiểm, thêm điều khoản phụ, thay đổi phương thức thanh toán hoặc cập nhật thông tin người thụ hưởng trên hợp đồng hiện tại.',
   'Policy Management', 'Quản Lý Hợp Đồng', true),
  ('Understanding Your Annual IUL Statement',
   'Hiểu Bản Sao Kê IUL Hàng Năm',
   'Jan 2025',
   'A complete guide to reading your IUL annual statement, including cash value growth, cost of insurance, index credits, and projected future values.',
   'Hướng dẫn đầy đủ để đọc bản sao kê IUL hàng năm, bao gồm tăng trưởng giá trị tiền mặt, chi phí bảo hiểm, tín dụng chỉ số và giá trị dự kiến trong tương lai.',
   'IUL', 'IUL', true),
  ('How to Add or Update a Beneficiary',
   'Cách Thêm Hoặc Cập Nhật Người Thụ Hưởng',
   'Mar 2025',
   'Step-by-step instructions for naming or changing your primary and contingent beneficiaries to ensure your policy proceeds go to the right people.',
   'Hướng dẫn từng bước để đặt tên hoặc thay đổi người thụ hưởng chính và dự phòng, đảm bảo quyền lợi hợp đồng đến đúng người.',
   'Beneficiary', 'Người Thụ Hưởng', true),
  ('Step-by-Step Guide to Filing a Claim',
   'Hướng Dẫn Từng Bước Nộp Hồ Sơ Bồi Thường',
   'Apr 2025',
   'Everything you need to know about filing a death benefit, living benefit, or disability claim — documents required, timeline, and what to expect at each stage.',
   'Tất cả những gì bạn cần biết về nộp hồ sơ quyền lợi tử vong, quyền lợi sống hoặc bồi thường khuyết tật — giấy tờ cần thiết, thời gian xử lý và những gì cần kỳ vọng ở từng giai đoạn.',
   'Claims', 'Bồi Thường', true)
on conflict do nothing;

-- ============================================================
-- PRIORITY PERKS — 6 quyền lợi thành viên ưu tiên
-- ============================================================

insert into priority_perks (icon, label_en, label_vi, description_en, description_vi, sort_order, active) values
  ('👤',
   'Dedicated VIP Advisor',
   'Chuyên Viên VIP Riêng',
   'A named personal advisor is assigned exclusively to you — always available for calls, emails, and in-person meetings.',
   'Một chuyên viên cá nhân được chỉ định riêng cho bạn — luôn sẵn sàng qua điện thoại, email và gặp trực tiếp.',
   1, true),
  ('⚡',
   'Priority Claims Processing',
   'Xử Lý Bồi Thường Ưu Tiên',
   'Priority members skip the queue. Your claims are reviewed first, reducing processing time by up to 50% compared to standard cases.',
   'Thành viên ưu tiên được xử lý trước. Hồ sơ của bạn được xem xét đầu tiên, giảm thời gian xử lý lên đến 50% so với hồ sơ thông thường.',
   2, true),
  ('📅',
   'Annual Policy Review',
   'Đánh Giá Hợp Đồng Hàng Năm',
   'Every year, your advisor proactively reviews your policy to ensure your coverage keeps pace with life changes — marriage, new child, home purchase.',
   'Mỗi năm, chuyên viên sẽ chủ động xem xét hợp đồng để đảm bảo bảo hiểm theo kịp những thay đổi cuộc sống — kết hôn, con mới, mua nhà.',
   3, true),
  ('🎁',
   'Exclusive Member Discounts',
   'Giảm Giá Thành Viên Độc Quyền',
   'Access exclusive rate reductions and waived fees on additional policies, riders, and partner services not available to standard policyholders.',
   'Tiếp cận mức giảm giá độc quyền và miễn phí cho các hợp đồng bổ sung, điều khoản phụ và dịch vụ đối tác không dành cho khách hàng thông thường.',
   4, true),
  ('📞',
   '24/7 Emergency Support Line',
   'Đường Dây Hỗ Trợ Khẩn Cấp 24/7',
   'Emergencies don''t keep office hours. Priority members have direct access to our on-call team around the clock, 365 days a year.',
   'Khẩn cấp không theo giờ hành chính. Thành viên ưu tiên có thể liên hệ trực tiếp với đội ngũ trực ban suốt ngày đêm, 365 ngày một năm.',
   5, true),
  ('👨‍👩‍👧‍👦',
   'Multi-Policy Family Bundle',
   'Gói Gia Đình Nhiều Hợp Đồng',
   'Insure your entire family under a coordinated bundle and receive consolidated billing, shared annual reviews, and family-rate pricing.',
   'Bảo hiểm toàn bộ gia đình trong một gói phối hợp và nhận hóa đơn tổng hợp, đánh giá hàng năm chung và mức giá ưu đãi gia đình.',
   6, true)
on conflict do nothing;
