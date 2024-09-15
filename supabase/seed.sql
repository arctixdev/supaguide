SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1 (Ubuntu 15.1-1.pgdg20.04+1)
-- Dumped by pg_dump version 15.7 (Ubuntu 15.7-1.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."audit_log_entries" ("instance_id", "id", "payload", "created_at", "ip_address") VALUES
	('00000000-0000-0000-0000-000000000000', 'd7a70f22-2a22-4240-a0e0-7c84496a4360', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"jonathan@bangert.dk","user_id":"69216bde-2442-4af5-997b-3b37d1a09e6b","user_phone":""}}', '2024-09-08 20:16:03.362427+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f61f659b-6434-4462-b7e7-ec0bf620cc2e', '{"action":"login","actor_id":"69216bde-2442-4af5-997b-3b37d1a09e6b","actor_username":"jonathan@bangert.dk","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-09-08 20:53:40.798745+00', ''),
	('00000000-0000-0000-0000-000000000000', '0e759500-5cf2-4526-9db8-72f6b3127f74', '{"action":"login","actor_id":"69216bde-2442-4af5-997b-3b37d1a09e6b","actor_username":"jonathan@bangert.dk","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-09-09 04:28:01.670346+00', ''),
	('00000000-0000-0000-0000-000000000000', 'caaf96ab-63b4-486c-af88-c3936db0043f', '{"action":"logout","actor_id":"69216bde-2442-4af5-997b-3b37d1a09e6b","actor_username":"jonathan@bangert.dk","actor_via_sso":false,"log_type":"account"}', '2024-09-09 04:32:09.85439+00', ''),
	('00000000-0000-0000-0000-000000000000', '1a5d65e3-407e-44d8-9c4b-08451aae6391', '{"action":"login","actor_id":"69216bde-2442-4af5-997b-3b37d1a09e6b","actor_username":"jonathan@bangert.dk","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-09-09 04:32:16.866846+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c5a7f3c3-d22c-428a-9be6-d31a61c7fb53', '{"action":"logout","actor_id":"69216bde-2442-4af5-997b-3b37d1a09e6b","actor_username":"jonathan@bangert.dk","actor_via_sso":false,"log_type":"account"}', '2024-09-09 04:32:43.122817+00', ''),
	('00000000-0000-0000-0000-000000000000', '63032845-06d2-4918-a3ff-f52689cb298e', '{"action":"login","actor_id":"69216bde-2442-4af5-997b-3b37d1a09e6b","actor_username":"jonathan@bangert.dk","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-09-09 05:09:39.37079+00', ''),
	('00000000-0000-0000-0000-000000000000', '1442956a-a169-46bc-9dc7-e176d630b00c', '{"action":"token_refreshed","actor_id":"69216bde-2442-4af5-997b-3b37d1a09e6b","actor_username":"jonathan@bangert.dk","actor_via_sso":false,"log_type":"token"}', '2024-09-10 03:50:44.976694+00', ''),
	('00000000-0000-0000-0000-000000000000', '79614d7e-2462-472e-b38e-b3c731fe6435', '{"action":"token_revoked","actor_id":"69216bde-2442-4af5-997b-3b37d1a09e6b","actor_username":"jonathan@bangert.dk","actor_via_sso":false,"log_type":"token"}', '2024-09-10 03:50:44.978641+00', ''),
	('00000000-0000-0000-0000-000000000000', '646c73f3-9550-45a2-a435-8a8552891cf3', '{"action":"token_refreshed","actor_id":"69216bde-2442-4af5-997b-3b37d1a09e6b","actor_username":"jonathan@bangert.dk","actor_via_sso":false,"log_type":"token"}', '2024-09-10 03:50:45.139133+00', ''),
	('00000000-0000-0000-0000-000000000000', '3e11068b-7241-47e5-973e-764ca6c32d6e', '{"action":"logout","actor_id":"69216bde-2442-4af5-997b-3b37d1a09e6b","actor_username":"jonathan@bangert.dk","actor_via_sso":false,"log_type":"account"}', '2024-09-10 03:51:12.637981+00', ''),
	('00000000-0000-0000-0000-000000000000', '8f023508-9547-408a-af25-d4d032392708', '{"action":"user_recovery_requested","actor_id":"69216bde-2442-4af5-997b-3b37d1a09e6b","actor_username":"jonathan@bangert.dk","actor_via_sso":false,"log_type":"user"}', '2024-09-10 03:51:18.682838+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ed2517b0-b818-47a1-b26f-0aab56208f56', '{"action":"login","actor_id":"69216bde-2442-4af5-997b-3b37d1a09e6b","actor_username":"jonathan@bangert.dk","actor_via_sso":false,"log_type":"account"}', '2024-09-10 03:51:52.522711+00', ''),
	('00000000-0000-0000-0000-000000000000', '2de896d2-aa57-403e-bd8a-96e8ab31e5f5', '{"action":"user_recovery_requested","actor_id":"69216bde-2442-4af5-997b-3b37d1a09e6b","actor_username":"jonathan@bangert.dk","actor_via_sso":false,"log_type":"user"}', '2024-09-10 03:53:51.713012+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ba50f4a9-74e5-481a-b669-ddd317e4078c', '{"action":"login","actor_id":"69216bde-2442-4af5-997b-3b37d1a09e6b","actor_username":"jonathan@bangert.dk","actor_via_sso":false,"log_type":"account"}', '2024-09-10 03:54:00.308184+00', ''),
	('00000000-0000-0000-0000-000000000000', '50471c34-4c17-4691-b54a-3fdff26830e7', '{"action":"user_recovery_requested","actor_id":"69216bde-2442-4af5-997b-3b37d1a09e6b","actor_username":"jonathan@bangert.dk","actor_via_sso":false,"log_type":"user"}', '2024-09-10 03:55:51.934985+00', ''),
	('00000000-0000-0000-0000-000000000000', '9bcaacde-09fe-4672-80b3-426a38ca4e50', '{"action":"login","actor_id":"69216bde-2442-4af5-997b-3b37d1a09e6b","actor_username":"jonathan@bangert.dk","actor_via_sso":false,"log_type":"account"}', '2024-09-10 03:55:56.252898+00', ''),
	('00000000-0000-0000-0000-000000000000', '3a680f9d-101b-4296-b562-dbb8d2773513', '{"action":"login","actor_id":"69216bde-2442-4af5-997b-3b37d1a09e6b","actor_username":"jonathan@bangert.dk","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-09-10 03:59:37.636731+00', ''),
	('00000000-0000-0000-0000-000000000000', '03cd5a7c-81cc-4e1f-9c02-50b545c5aa76', '{"action":"logout","actor_id":"69216bde-2442-4af5-997b-3b37d1a09e6b","actor_username":"jonathan@bangert.dk","actor_via_sso":false,"log_type":"account"}', '2024-09-10 04:00:11.544295+00', ''),
	('00000000-0000-0000-0000-000000000000', '1864bec8-b5ae-44e3-9773-7f9b08297cfe', '{"action":"user_recovery_requested","actor_id":"69216bde-2442-4af5-997b-3b37d1a09e6b","actor_username":"jonathan@bangert.dk","actor_via_sso":false,"log_type":"user"}', '2024-09-10 04:00:18.343918+00', ''),
	('00000000-0000-0000-0000-000000000000', '5827c802-cab2-4f0c-85f7-9207958a594c', '{"action":"login","actor_id":"69216bde-2442-4af5-997b-3b37d1a09e6b","actor_username":"jonathan@bangert.dk","actor_via_sso":false,"log_type":"account"}', '2024-09-10 04:00:31.861456+00', ''),
	('00000000-0000-0000-0000-000000000000', '718a6d44-e99a-425d-b65b-de901120c7bc', '{"action":"login","actor_id":"69216bde-2442-4af5-997b-3b37d1a09e6b","actor_username":"jonathan@bangert.dk","actor_via_sso":false,"log_type":"account","traits":{"provider_type":"magiclink"}}', '2024-09-10 04:00:32.719389+00', ''),
	('00000000-0000-0000-0000-000000000000', '2c463682-381e-4c58-805a-b26c94fa881f', '{"action":"user_recovery_requested","actor_id":"69216bde-2442-4af5-997b-3b37d1a09e6b","actor_username":"jonathan@bangert.dk","actor_via_sso":false,"log_type":"user"}', '2024-09-10 20:05:13.446092+00', ''),
	('00000000-0000-0000-0000-000000000000', '91f89ea6-389c-4ca3-8175-3c55c37ecbda', '{"action":"user_recovery_requested","actor_id":"69216bde-2442-4af5-997b-3b37d1a09e6b","actor_username":"jonathan@bangert.dk","actor_via_sso":false,"log_type":"user"}', '2024-09-14 22:43:49.076729+00', ''),
	('00000000-0000-0000-0000-000000000000', '7cfacd55-3ff0-47d8-9d41-31ac0b0a4b5b', '{"action":"user_recovery_requested","actor_id":"69216bde-2442-4af5-997b-3b37d1a09e6b","actor_username":"jonathan@bangert.dk","actor_via_sso":false,"log_type":"user"}', '2024-09-14 22:51:15.065403+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f01d8859-70fd-4c46-a944-6aff671e1723', '{"action":"login","actor_id":"69216bde-2442-4af5-997b-3b37d1a09e6b","actor_username":"jonathan@bangert.dk","actor_via_sso":false,"log_type":"account"}', '2024-09-14 22:52:12.03694+00', ''),
	('00000000-0000-0000-0000-000000000000', '4487df5a-97e2-43d9-9676-2daf2a47bdd7', '{"action":"token_refreshed","actor_id":"69216bde-2442-4af5-997b-3b37d1a09e6b","actor_username":"jonathan@bangert.dk","actor_via_sso":false,"log_type":"token"}', '2024-09-15 04:15:55.38382+00', ''),
	('00000000-0000-0000-0000-000000000000', 'baf7e4fa-a2cf-4dc1-b143-d0f4772ba78f', '{"action":"token_revoked","actor_id":"69216bde-2442-4af5-997b-3b37d1a09e6b","actor_username":"jonathan@bangert.dk","actor_via_sso":false,"log_type":"token"}', '2024-09-15 04:15:55.384835+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a25b4f20-a6dc-408c-b879-59ec90349b3a', '{"action":"token_refreshed","actor_id":"69216bde-2442-4af5-997b-3b37d1a09e6b","actor_username":"jonathan@bangert.dk","actor_via_sso":false,"log_type":"token"}', '2024-09-15 05:17:50.216676+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b978926e-962e-4008-a8a8-fd0f63d07bfd', '{"action":"token_revoked","actor_id":"69216bde-2442-4af5-997b-3b37d1a09e6b","actor_username":"jonathan@bangert.dk","actor_via_sso":false,"log_type":"token"}', '2024-09-15 05:17:50.217353+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."flow_state" ("id", "user_id", "auth_code", "code_challenge_method", "code_challenge", "provider_type", "provider_access_token", "provider_refresh_token", "created_at", "updated_at", "authentication_method", "auth_code_issued_at") VALUES
	('fd45327a-d7dc-4d95-ab37-a6b1261998a1', '69216bde-2442-4af5-997b-3b37d1a09e6b', 'ad8e6357-45b4-4a6c-9f09-c8d8e133fad6', 's256', 'RicAVznFg7o-4OPwwrkz4B25z0Ap7wZbtzBXMty9dj0', 'magiclink', '', '', '2024-09-10 03:51:18.680322+00', '2024-09-10 03:51:52.526586+00', 'magiclink', '2024-09-10 03:51:52.526551+00'),
	('f9310599-7ca2-4837-b532-28e899305b94', '69216bde-2442-4af5-997b-3b37d1a09e6b', '2c4bc362-1741-471f-9862-32da5206ae15', 's256', '_jrvIrlsVj35tpun6qCCXzd3bgoIcrDPGsylb4VUe1o', 'magiclink', '', '', '2024-09-10 03:53:51.701265+00', '2024-09-10 03:54:00.310488+00', 'magiclink', '2024-09-10 03:54:00.310448+00'),
	('3ba3c7b1-220d-41d0-91d5-5c9deae1d251', '69216bde-2442-4af5-997b-3b37d1a09e6b', '8b992d82-a6a1-4aef-8328-8c5fccb67400', 's256', 'ikjnOyb7_TSsO_loD7SHDTCllEbaVlLqYSg31h-Oc3U', 'magiclink', '', '', '2024-09-10 03:55:51.92398+00', '2024-09-10 03:55:56.25407+00', 'magiclink', '2024-09-10 03:55:56.25405+00');


--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") VALUES
	('00000000-0000-0000-0000-000000000000', '69216bde-2442-4af5-997b-3b37d1a09e6b', 'authenticated', 'authenticated', 'jonathan@bangert.dk', '$2a$10$VEeKbic0lQNTAyLpK8vOseFHIQjeUHaZs1ou58BwGKlCNmuF6gc/.', '2024-09-08 20:16:03.375036+00', NULL, '', NULL, '', '2024-09-14 22:51:15.065003+00', '', '', NULL, '2024-09-14 22:52:12.03853+00', '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-09-08 20:16:03.357857+00', '2024-09-15 05:17:50.219009+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('69216bde-2442-4af5-997b-3b37d1a09e6b', '69216bde-2442-4af5-997b-3b37d1a09e6b', '{"sub": "69216bde-2442-4af5-997b-3b37d1a09e6b", "email": "jonathan@bangert.dk", "email_verified": false, "phone_verified": false}', 'email', '2024-09-08 20:16:03.360437+00', '2024-09-08 20:16:03.360547+00', '2024-09-08 20:16:03.360547+00', 'a52e8338-5843-41f3-85d0-50764cffbcda');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."sessions" ("id", "user_id", "created_at", "updated_at", "factor_id", "aal", "not_after", "refreshed_at", "user_agent", "ip", "tag") VALUES
	('1befd0a8-9141-4176-b4db-634405151e66', '69216bde-2442-4af5-997b-3b37d1a09e6b', '2024-09-10 04:00:32.720202+00', '2024-09-10 04:00:32.720202+00', NULL, 'aal1', NULL, NULL, 'Mozilla/5.0 (X11; Linux x86_64; rv:130.0) Gecko/20100101 Firefox/130.0', '172.18.0.1', NULL),
	('c62a9469-fe97-4a54-a1f2-d50660a6d9b7', '69216bde-2442-4af5-997b-3b37d1a09e6b', '2024-09-14 22:52:12.038581+00', '2024-09-15 05:17:50.220148+00', NULL, 'aal1', NULL, '2024-09-15 05:17:50.220088', 'Mozilla/5.0 (X11; Linux x86_64; rv:130.0) Gecko/20100101 Firefox/130.0', '172.18.0.1', NULL);


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."mfa_amr_claims" ("session_id", "created_at", "updated_at", "authentication_method", "id") VALUES
	('1befd0a8-9141-4176-b4db-634405151e66', '2024-09-10 04:00:32.721644+00', '2024-09-10 04:00:32.721644+00', 'magiclink', '7c594008-d344-432b-a851-8435f2d5315d'),
	('c62a9469-fe97-4a54-a1f2-d50660a6d9b7', '2024-09-14 22:52:12.044478+00', '2024-09-14 22:52:12.044478+00', 'otp', '237493d3-8416-46cd-a9a2-fb51efb326ef');


--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."refresh_tokens" ("instance_id", "id", "token", "user_id", "revoked", "created_at", "updated_at", "parent", "session_id") VALUES
	('00000000-0000-0000-0000-000000000000', 7, 'nCNz6YDXG-2lNzISH8kqPA', '69216bde-2442-4af5-997b-3b37d1a09e6b', false, '2024-09-10 04:00:32.720782+00', '2024-09-10 04:00:32.720782+00', NULL, '1befd0a8-9141-4176-b4db-634405151e66'),
	('00000000-0000-0000-0000-000000000000', 8, '2Z3ySWgaWL54yqoiWex_8g', '69216bde-2442-4af5-997b-3b37d1a09e6b', true, '2024-09-14 22:52:12.040183+00', '2024-09-15 04:15:55.385582+00', NULL, 'c62a9469-fe97-4a54-a1f2-d50660a6d9b7'),
	('00000000-0000-0000-0000-000000000000', 9, 'KHeuQWqgZ3l7nLaYAWA-Ow', '69216bde-2442-4af5-997b-3b37d1a09e6b', true, '2024-09-15 04:15:55.386448+00', '2024-09-15 05:17:50.217762+00', '2Z3ySWgaWL54yqoiWex_8g', 'c62a9469-fe97-4a54-a1f2-d50660a6d9b7'),
	('00000000-0000-0000-0000-000000000000', 10, 'GoEUMLgbqSmla4k090mENg', '69216bde-2442-4af5-997b-3b37d1a09e6b', false, '2024-09-15 05:17:50.218258+00', '2024-09-15 05:17:50.218258+00', 'KHeuQWqgZ3l7nLaYAWA-Ow', 'c62a9469-fe97-4a54-a1f2-d50660a6d9b7');


--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: key; Type: TABLE DATA; Schema: pgsodium; Owner: supabase_admin
--



--
-- Data for Name: service_users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."service_users" ("id", "created_at", "full_name", "supabase_user") VALUES
	(1, '2024-09-15 05:07:04.292839+00', 'Jonathan Bangert', '69216bde-2442-4af5-997b-3b37d1a09e6b');


--
-- Data for Name: tenants; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."tenants" ("id", "created_at", "name", "domain") VALUES
	('packt', '2024-09-15 04:43:56.31962+00', 'Pact Publishing', 'packt.local'),
	('activenode', '2024-09-15 04:44:27.316894+00', 'ActiveNode Education', 'activenode.learn'),
	('akademia', '2024-09-15 04:44:45.381016+00', 'Akademia', 'akademia.cc'),
	('oddmonkey', '2024-09-15 04:45:23.389447+00', 'OddMonkey Inc', 'oddmonkey.inc');


--
-- Data for Name: tenant_permission; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."tenant_permission" ("id", "created_at", "service_user", "tenant") VALUES
	(1, '2024-09-15 15:45:57.190772+00', 1, 'packt'),
	(2, '2024-09-15 15:46:30.358568+00', 1, 'oddmonkey'),
	(3, '2024-09-15 15:46:42.671002+00', 1, 'akademia');


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: hooks; Type: TABLE DATA; Schema: supabase_functions; Owner: supabase_functions_admin
--



--
-- Data for Name: secrets; Type: TABLE DATA; Schema: vault; Owner: supabase_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 42, true);


--
-- Name: key_key_id_seq; Type: SEQUENCE SET; Schema: pgsodium; Owner: supabase_admin
--

SELECT pg_catalog.setval('"pgsodium"."key_key_id_seq"', 1, false);


--
-- Name: service_users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."service_users_id_seq"', 1, true);


--
-- Name: tenant_permission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."tenant_permission_id_seq"', 3, true);


--
-- Name: hooks_id_seq; Type: SEQUENCE SET; Schema: supabase_functions; Owner: supabase_functions_admin
--

SELECT pg_catalog.setval('"supabase_functions"."hooks_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

RESET ALL;
