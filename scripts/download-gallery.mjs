import https from 'https'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const PHOTO_BASES = [
  'https://lh3.googleusercontent.com/pw/AP1GczM_7-sAKshnRuA4lJkDNhSm7Yi758o4df_wXfZZF009rkDinLZBJh1QrmqzpcGsGz9fsZBEURVjNlIZJr703wkDPBUl2HwyTpuhmYLd2_-6pxrURcRj',
  'https://lh3.googleusercontent.com/pw/AP1GczM_hWiVSefH5s1bIhoBg2Q8pa_Kv0Ywf-CmUrTCcipuqABDDcmFoL6F_Q6DY1Lou01bqwQLlFMt6b8V4F3I12zSvkmGDo-tHJP7YKRGgSYVTEnwytbw',
  'https://lh3.googleusercontent.com/pw/AP1GczM1eRRabtYMIz0_9C_lTMKV1nv4FGca_NuX-8kqUpDDKKFTUz3iBcaFd12PQhueCzYt28G-_qA4YaVRV8Z7B6LLRF6M_Gt-oA9-Xdx-FGKsbTF8djWK',
  'https://lh3.googleusercontent.com/pw/AP1GczM2-CEsneu89I5t4nu7eR-tyxgagy4ySBgCjd9OP1Nh_3sgAN2YBlG3AYDXAMA7ETj9axEX-wN2eQN8RBEC5IC1CAUQE3JeoYfXKSAIwccBBFcbGs1i',
  'https://lh3.googleusercontent.com/pw/AP1GczM4sZjauvqbVJ30qx17n8EeHRc3WKLhh4wtu_ICYJgqiuWlwiO9p0lkaHEcDiE0JLuakSPug5hr4qadwiQ6M3-aFgEMhKfEHA-GkuxH7ulUz-LR3gvG',
  'https://lh3.googleusercontent.com/pw/AP1GczM5TK5CgwothvFW3m1G2Qb8MiTnehSrUwvmD3PcEPJQhFh5J5WhtdgBWBHJ8K5AzxrCNWs3cqSd7CnTCrEy3rb5zEWcz_Ac1noPwCK5tPtahaMLmryB',
  'https://lh3.googleusercontent.com/pw/AP1GczM5YeH6PgXiZP02qJev9JmhMPK_o9K2vSbeyliMenW1Khg9GbARUo2uPrsyQQFqoANezC9-k7d8r7jFI-1n4idw6gY_UA65azvYptBsIGYajoptKHQC',
  'https://lh3.googleusercontent.com/pw/AP1GczM6FoIhgVOeXRNWFIrKriJ6eCYVM8rmzrVDfErmxhl2glsXl8yzB9jD2pecLrjOTXX3q1pO4phU1Q2va_G6fmSmXfY014sPri_ubfwbu4hmkKTXTRDl',
  'https://lh3.googleusercontent.com/pw/AP1GczM9pOd5H5wOPL-T4JmTd13tsM57WwHrL_N-A10v8ZxvhIZtZY-INc5uolENAez4k34_DttjEMp464r-W9Fz55fCz_lrWgbgHSprh1gL2HDUYYzMkOkt',
  'https://lh3.googleusercontent.com/pw/AP1GczMaIycexN6UX5Tds9mgPOGswZ6IaUar2ZoRi4I00vBzaa2tLi2jgvyOMrF0v8C_s2XhqTjmtvs_HJtPeHrIUFr7a6lYi_lnPz-OUNveWxdbmGeP-Ard',
  'https://lh3.googleusercontent.com/pw/AP1GczMBbVeDp2V2ijzxH3W2X50ZJ9vL194D7DaGKpFlEYWjer5l9NnKxNbxtjqTw2F35dB_M8Hn-YL3zQSk5VbpyQQudbe4q9aITNs22KGEr1CezL67vG9H',
  'https://lh3.googleusercontent.com/pw/AP1GczMbtxius3fjZw2pSoJTXb8P5HiY5p0HVJWHjwt3Q1c0lOjfGCk8NRKfQxDrN0S4tk0SeXpnFb0y6RjM_WBvT7In8FgX839LUso4bu_oZ',
  'https://lh3.googleusercontent.com/pw/AP1GczMctoCGoGyYQNJfiD82w5IFuG5E5p0Nrfxx4RzJYRNjxHks47efx_u0hbvo6Ja_Nu7hEML31uVdWdnEjlJD8-u4iBqip4-T0aMj1YvorNNzNmlSzXnE',
  'https://lh3.googleusercontent.com/pw/AP1GczMD7LVLa6CGtHGqR5gLaDM_pLpUuARwXyLJWynG7nLgsWdsI3bk-ZE-go963bZittcELyKgMJwqOvq7EQOcQSJ9pRFyrMclsz7RdjlIhF7H3iweaXni',
  'https://lh3.googleusercontent.com/pw/AP1GczMEa1_9Z4Kg2F5QOlXWMh8OPRuxKWc8tOplJ1zSldvg5WwvxO0AqRhJPzpaxJectBDsiX9UMadJLu3Iq0mNjyXZkky2TBaWXHIiDRYR5dA-4SsSnMMY',
  'https://lh3.googleusercontent.com/pw/AP1GczMEcT5Ca-NsZ0_bBmz67VKlI5hZ4FViDP-5iHyScxPrEzkXfzrzKgmlBk_JhD101rkvc2A7PoEY1ygHKuNHnxziE4PBHMBjT9UFdHMmGbGiFV6lp1_2',
  'https://lh3.googleusercontent.com/pw/AP1GczMem3RLbS3luBpDWJUM6NL3Cof7cH8112nRwpC43YeNFyrEE0G6ZpVL0AMyvEwIkZqPN_z1u4sV1XAhsi9iVuSUiH3zH569ItsDsMR4_yDR1kXWE8JR3',
  'https://lh3.googleusercontent.com/pw/AP1GczMGyrKNnbnLWvE6YFxi2jH6fhqowzBnpb4u5jA_1gHtnvME21q6gq-bK2ISToOTFJU0MRkTkBSfGuIo13Unc_sr6_bTK83VtDCbjsQmfvq9IcB7e-wZ',
  'https://lh3.googleusercontent.com/pw/AP1GczMhr-zj3L-UkFGqkvq4tWexIsRmCBJpGzlalD9DyaHerh2GKXJ0VvgxBiSNejSXwNirB7EPHBU_NAsURSP0F8P-VUjgOoMYqMo8eSZxI-OHGq7B9wfB',
  'https://lh3.googleusercontent.com/pw/AP1GczMJJV2deA0SNAIwfHc4YYFd3y7PAQEDGWuFzuEc-j0r85PwhmHcUtcI9I5KewjKfu1f72blvkYtDgUCMAt3RUpDmD0eFjgQ0JFHUVrw_NGuummVfIdy',
  'https://lh3.googleusercontent.com/pw/AP1GczMm2O2HEPott8VNf2WF_4Vvls80gg4tt25B57zutqT9ud1Z-rX4YcgAavnVmPEhgtLjJS7Y04Z5LnlUK9MAcbTjNlTcxEpXBJqfuSibo1Z_f5QXkIYN',
  'https://lh3.googleusercontent.com/pw/AP1GczMPlX8EUsjhYs61LYQegv9Yvun9lGYWTZczCp8YMgZMpTXXP58vnlJ0z9orqpm9rMd-wEzOlZndrfko3GVAVZzXPnxAqc_iDfYzD1PNOf1DMRPho8MR',
  'https://lh3.googleusercontent.com/pw/AP1GczMRhBh1Fttj1-WTky4dRJxg8o_LXx06WY5T2I702KtMoTgh7V1YM-sEbjOwZON362x2GFi2RRpNbq7G6rBN9Ka4iqls-8OTFlk-Uh5Yl7ZvS42m_5ur',
  'https://lh3.googleusercontent.com/pw/AP1GczMRsyHy4Zsg-dnCPJajLJLifjVJtEWWkgWC1Q4TVJxLpjNDwN7GfkI_lbpHF2VoeWtLeFlGv4DEq_Qbt5-n5YnxHqak6yKeJdacwTw4lwlqHiwrkcUA',
  'https://lh3.googleusercontent.com/pw/AP1GczMsjeeK_HB3WlX6YmFZLyQXPOrG0uWQhM43SrYvtF2PDM8dqdF8iiYMVcYDrercTyIfofhPRffiHgr6Grlyyd897z0A4NuBFF35kGOVdUqcTlSqgsU2',
  'https://lh3.googleusercontent.com/pw/AP1GczMSk1dvUQxfJgTNXV6Tqi3Fnk5bkO9wwWWGIzCts4s-2m1WFXDydCElPp2znodXke0zNJqi5Upf_CWIAKPOobjdpfNP2CxmY64JFY7qyXiPT6-NLly0',
  'https://lh3.googleusercontent.com/pw/AP1GczMsSWmmOl2778ObqKyjGhQGJdXN2v2xzt_XZqhgYY_zZ4-akphtwkfr16hVsPun0-jgPyYJJ9qsdbkkLDPVmWjqDRFNCeJ2dSMEccPn_jv3ULHwOvWV',
  'https://lh3.googleusercontent.com/pw/AP1GczMtxkS-aQbwmXR12BRhVHxrVU8aA7Cnlftspru8l6YopZh7qsvSHOJiV2MKb3x3C3tiHOXVxl-_OFYXhDOFBFApbJfzeqlBS18p6wIwk0_MA8KYCEf7',
  'https://lh3.googleusercontent.com/pw/AP1GczMV9zMtBCn_QNeFh_9DSrOqixXbraWa6LDTzZop_l4VakSGSqe4M8rvfSNK0FlkRrmHHuPBdiIodv_i5b0NUkEbSC7aa32Oh__OgdvF7M_qTaqAuBcs',
  'https://lh3.googleusercontent.com/pw/AP1GczMvQSi-Iftp7aBEmolj4oiRzsohgQXYfGdUiubPAzbKpgKa7BI7d3rdYIrSGHO4Sgv0Vb_M61qZeaEJn5rkt2ZrppMfqPDPBnDH5ReXNm1QQ08PqMZf',
  'https://lh3.googleusercontent.com/pw/AP1GczMvZjPNnZ8JOJps2asm1C3IalT05rR1L4a7Q11wOEcKhhV6tWGmhKLc8sq_MwgVH7gXaZ9IvPLRot0zZbJTWI6NyXpZ5oMN9LtOONjqODw5BdiZGIqE',
  'https://lh3.googleusercontent.com/pw/AP1GczMXJQe6N1flLLS_oMlYFqi-ArICY3eoPeAGgKBHWRgM_G3iznlfSwNbK92qfQJNvWG2WFy79rSacJYhqCbpmt4h3-giLfUn1uVqpXpFSmnyLOfWO768',
  'https://lh3.googleusercontent.com/pw/AP1GczMXN4gusgS2z0wSGrcLMPnlOXw5wYVGQabccatkyTFNZN0gi7b30tYfK-dHuQM6oyrIn-jQWvqkGRjfhgoZjNERkXGLNO1EUaPULKQodDaS2HCB3nxY',
  'https://lh3.googleusercontent.com/pw/AP1GczMYbnA1gt9LCbRzjg-gVucNzK1HtjT-Z0qtkcfd-s90LcUwH2a38k6FXTUo1x8s4EVfgkTaiYJPqIGPvJ9J7z',
  'https://lh3.googleusercontent.com/pw/AP1GczMYEDRk9NUEFhSXEfAfW89XwzCnKWZD8FZp6fMOcTHCMzqih2_fAp09AvXDlEUOvusHZ73hQOUQfzmuHi67GtYijo2Q3cYzdcFf2yG8o1MtNmL_dt5F',
  'https://lh3.googleusercontent.com/pw/AP1GczMYI8k7fnRoZmDJdJTOcZpQxVWlF3rykC_AMhcuIqajSc0gZ4MxkI6kwwyU6_WPUdVT1v3S52tHMfiOjo02yNsYZoY2_2CUUFZ2BoNQBesRvH3DcGpx',
  'https://lh3.googleusercontent.com/pw/AP1GczMyN4AsKcRdeQklPoC2a_neYz2iuq_g34dI80sMj91yndtfjt6UYEhPr9xvKnkEURlya2cULj6Vyx2EyN3Zd03C0JluHzRY1Bhm1hmU72CMWOfuPm5R',
  'https://lh3.googleusercontent.com/pw/AP1GczMZEETYHsOIdJskNjSf9ZY3Wfe3AwwtOG_5szvNGi8QKUVAZOFGG4XSKyjlvLEkc0ZvfolttUCJ87V15pdSOv-ffHSdoSEDtHl5OLA_NB-UVACgTSrq',
  'https://lh3.googleusercontent.com/pw/AP1GczN0kdSIKUwu9WTOSNdnvIfLC6uxQiPw6E-3AHhGAOmyG2vZQq2nVylBGW0Wm5uA2hmORSYuLxnbG5yG4x2iEHxK7GbtbpPFsOiSiw7qP1e9r2AJ1B02',
  'https://lh3.googleusercontent.com/pw/AP1GczN0VEgRtGeZzuSuiY8RGbyDQrihbnzB8USdHbReAab9utaT8d1bLw1aZpJp22FjmWUhad_vZWUXncT6D-rMJTxto0T8K0AZVxoWnKMYAIzTfvE3qLi9',
  'https://lh3.googleusercontent.com/pw/AP1GczN2il_H_pTkOpwG2ZeMf1v63VmNpqxnik3BIV8ajonjGDmUXbv7873jFEIzPi9ui1__jJkCiB3B2SKNKoK1RPGqMbun2bEEHGQ_bdE-27JS-6Jwv5bz',
  'https://lh3.googleusercontent.com/pw/AP1GczN3lWmj2h4MoHg4ZdzJfiYtIWIppBT4TIIP60aI_E_KCb2PRuZQi2xAcWSrnKdENr5k1EOphXnLhak_k0s0pd0ZDCq70g-26mvEaXy4wBvS9Lm_xiDU',
  'https://lh3.googleusercontent.com/pw/AP1GczN5_6lRlNPKV7iZz_4zA3dzikq5oeJwsMQrkdvo1zVfK66cfcKFONUrJzRWHqWYbcmGeztytgwMTxD4u-oOMHXLWElxKRWyJRQp4l0FSmjvMpXJ_col',
  'https://lh3.googleusercontent.com/pw/AP1GczN7bnaywzO5N3DbC4rBWrizfWi7rOgIeEaPhyY4WFAgvO_t1LmbEEG-fJK18qXDzDJb72FVtjSxGEMxb22KeohnaE0C67z_0lJkvBgxXATqkEMuNfdM',
  'https://lh3.googleusercontent.com/pw/AP1GczN80knMtByi2s9X5e3lZSs8eEaQcHfJU9WBO9lm35Vrr9vAgAmL42QS8zHN_g9HBvlyI94cWQdfnWplvQoVwtFzDMeb0Zw0P629NxxpnggBUCiKQT2d',
  'https://lh3.googleusercontent.com/pw/AP1GczNA_MA-c1Yl4sH5OtRvtC4nVoftAwTm-7KsvaZqfgEk8J6wCQbK2TAyoSfW_QXGDUaoc58THAoXt8ZpxGbzLXPLEuUY5WNBrgPZ0SGdb34eiTpjt0W1',
  'https://lh3.googleusercontent.com/pw/AP1GczNARanoXbQT2te6LCn0NUMGL0mVLo2IXB0srixV-LvnBjdVeuQioEfTABBdv0g4Fw4paW70x_ITiKEP67t1z0fIEqtm4BMzhUA9SmlT6a6Tmu4RWn3P',
  'https://lh3.googleusercontent.com/pw/AP1GczNbDmP-bqctRjzyWdZGi5mA1Al8xRxMk3NHPWbf4tN4NuCwBpZAbLXjCJM-McBSW0hSFxFN3Bj3TnNtV1TLGKnb-LrOvzAyXqFohajeVnVuQEzVcbWW',
  'https://lh3.googleusercontent.com/pw/AP1GczNbJOWbeCSrmuCpDxrScblcNcju_wWkVmQE_MpNDgcDihO-YPQiHQ5fSCX7-fZAIBiBoY2X2Jmt_xsfkgKPsTG8UJhnIedghr7aZFyo14jpeNcSHH23',
  'https://lh3.googleusercontent.com/pw/AP1GczNbU5Vo-MK5iAXrNoHjl852Pod_mvHqCIzxf2ixYSEaR4OTlOHzUXtP6CVNET7qNLEg9TRLtDeH1eScfWNgbzFZ0ycLuLUxKvi9gCeDtcFrgR1QlKR0',
  'https://lh3.googleusercontent.com/pw/AP1GczNcc6p5E0fkB9tq2T9vk08hp8bkPqxGoYDSF-bRTG-Y-KOTcgOYrt3DQ7Dc4zV1QUQifK72p4hwyXogHxIBZBs5-QoEGANk_1w38jSqAXu-tiUImiKD',
  'https://lh3.googleusercontent.com/pw/AP1GczNCZuyBZ5X5q-7A5EgrA4s13m3opmmwdxlTRRZx07ftLOO9ymXuWF0CvC3LrjpoABmC1B9cH17iL29R2azeZJzxPhTPo-fJuuKkAWkGEdncKsqqpx2C',
  'https://lh3.googleusercontent.com/pw/AP1GczNepeFrvpSADmXT_U_FyQtkXbZ-R2yml1GNx1Txn6oeJyNksBmqEOLR-w-otKXllOJmDixA4t4Df_DBz5KY8uNA3Qr9azM3g0vT9cLRu5MhTh7od_jN',
  'https://lh3.googleusercontent.com/pw/AP1GczNffy8XXf65Av-EdZwEQqlFpupXyU0ilJs8xRUCjcFjjLXNrLPyfZqkpuv_bJBmvSa7RU5Q_P6eo9080oAbWVB42YJecmWJiPq41QYBRKfKehkl23kj',
  'https://lh3.googleusercontent.com/pw/AP1GczNG774mmhe7kuqXHed8t74Qw_9SGOuhE5a30rYM6hArCCEzaIdcrGxfDnyu6zRVHARJxijHbbjfpOHC8RSWcuMVTdqoNSBhrcQVZbkd2fvJlx2zNt63',
  'https://lh3.googleusercontent.com/pw/AP1GczNgtT9WUTxI6afGssCgSbcXc7HPWAXAt7COfsmkUxTI6nIFDmAVHpn5dPh_pc59WUSZFSkKCbg-2isLnWU5b6I9QE3mXE6zvziDCvuaHpj0R92hVoxR',
  'https://lh3.googleusercontent.com/pw/AP1GczNgUe3gFHFHBXVtexhrE8iTl4Po2DDICjc1TesUagjW-VFi55m4P1iA09mIEMJj2c8CSLYhwyG2fXhPzGU9W2_uNeboQo5-_07Oz9QJokUpFX8Q1J9d',
  'https://lh3.googleusercontent.com/pw/AP1GczNHlg53Opxp74xnrHSF-fjP36JlqEY2P_EHW8puUVw1t_3zklzej-KjLTs4S5Y-DdQaErd-DZAfVl46C7TYy8CM9AxOJip2Ta5iWFFwiO1X-vB8x_-1',
  'https://lh3.googleusercontent.com/pw/AP1GczNkk8NVCta1VNR1RvYS_0NWSJc2NaSkEUCBL5fpgDL8Y2Nj43Im-vzhOY0LT5z0qaGZmjcpuuclEPpJmz0VpFlnC45-yoDPI-eUXtZbIDcUk2KAFktf',
  'https://lh3.googleusercontent.com/pw/AP1GczNLAJUUJLGgI4c1NIjOBAjhz-umNKp3awR8OMRQfwL03OwppV15ICgfsnIIxbalbJ-xF0ct5yROaVDYfw-kieQfMH4qALM-gU6CUirap1kA-jF8rp1f',
  'https://lh3.googleusercontent.com/pw/AP1GczNmJCAUJCJIXa-Kio2mQgUG6v44OVPQsUM39CccJAJqHGCaDTCX4nobiW2YuQsoTGdXzNy4JRQtLxzVr-URLYqgaFOfsk7HhLstZL3ZiYajWqc9dMMX',
  'https://lh3.googleusercontent.com/pw/AP1GczNNmKbdQBDBOGSqlezZmS2v0gieoM1HVZvDxd9i-CH_FaBNgCprqiEtZg-sJ-Vrp3JZCmVj4HSCGfZ88W6oE5aRKG8M7lWuT1ySK2U9ZMcfH2OVhlzR',
  'https://lh3.googleusercontent.com/pw/AP1GczNnyMXRJLewnmfCM2yDUDkfz3VnbRgQ-MpLRATkmvdD7vPLGAocRQLhCFGu7xG9S3_IeX3yttfuseV5WXvwXSsy9oJnE8dBCYaDGdkg0YFTxk0z4G-w',
  'https://lh3.googleusercontent.com/pw/AP1GczNPGzbMs-Q5TMWGTucqXD7C_pw9KHf8A-40DkwO6RtJ22rjYL6NjvbrvDqnjqAkmdGAWO2EigEViOQLVSGwj90pMuE42GiDWTOSJVjen5i9XpQZpSNc',
  'https://lh3.googleusercontent.com/pw/AP1GczNpvQNFeH066fDTWvzy2vKsNBXVc8BE4hTZKN4QhKnyW8KW1bEjy7PIlVUeKbjDGMZUdyF1hEl_AN9I5lzl-QKRWuHfZVC-GMVZ9h4dJdEW2RS9UY9b',
  'https://lh3.googleusercontent.com/pw/AP1GczNQJ_MV0OwVDCT50myo_kW1EMFs9I7tfXx54H9eT3BWIDGMcyKan8kKEqkTe66eO_exJySpO6UdiXdudjpxF6PjWjyiaeDE0of4dYGCODD5t59vqBSC',
  'https://lh3.googleusercontent.com/pw/AP1GczNQupNXEtqMMRaGVw-o2YpG5UDHcdirUriAflWpP-IZFB_Wh7CTp-so7lYPR-40p3dLmtPnpMNvvFrvuRRLo2u0Nh6mVsofS1Q99vx3ikY7zGp6LRfd',
  'https://lh3.googleusercontent.com/pw/AP1GczNrvt1yFujtm1tfv2dmhtGnN8vfhfNiZq7eMoEKye-AJIPDxhFTDmBBgFSsJ-kz7Xy_DQDdfRvKreml_9m-zKW43gXZilaezknQITIE3bSNjqC3KdsN',
  'https://lh3.googleusercontent.com/pw/AP1GczNRvuADmWAZd0eJdGFJkAQSf1dhPXiiFPp34qOv9H2CfpckcPVhOx__Fx1xVvOJbb5YeBraAVxZPGVEORzJsZAFk-yHPI_itoHnAjdfE-XuTZ50PHyy',
  'https://lh3.googleusercontent.com/pw/AP1GczNV-DK3JspNxfGihLvYIaR1sgqXXsN7eIg-aO8tzcBOK4oEarG1GnVtFXYb8RpuEDpZ62nwkzCyvdaVY8Wn8ztVDkbDxiHuOicc1cx2xiGcLreb_4Mu',
  'https://lh3.googleusercontent.com/pw/AP1GczNwBHCzZGvrGLuSA7CFE6KSIaabIuZRrOQnLnZc3cbVVi64zwKRgbdPiBiDDr1Tudd-BeDCseAtdJ3f2fSm8xPFl8Ti8m5B0lfnz-P5r9SZuTV5E8hu',
  'https://lh3.googleusercontent.com/pw/AP1GczNybtyh5UFIj_qyHI_7Lg8WElkYsky-G6op5QOal9wGjhZJz-Xtt9XlLvWu_SCC-zZIMs55uI5qDHjR-7MlPRrxvD_YAfR6ZKqAdymdUEKbJMKJb_B-',
  'https://lh3.googleusercontent.com/pw/AP1GczNY-e8WwBtwsjUOsKRQixReA9L7fK4d2xzrgsrYVNiIBOrHNvfFu2mAro_vNJyHcWX79gISu2APWwFpg5V-30nHUevhkhJzO3Y8_pp8zgUVDks2_Wj6',
  'https://lh3.googleusercontent.com/pw/AP1GczNYgrfzW39f-5kihbjgxCjjaJJM2nfXqi6Almai6a7yxa5dWliEj08LZ34mJT2v-ne_3Kk7Ka8R-ItsT__KZ7F1X4VUsg04o67uXv4e1cBU2ALfk3Do',
  'https://lh3.googleusercontent.com/pw/AP1GczNz78EaOe3PR7inMgq_ihhh-rcKXNiAVk0ErShc9TZPExowvP8efxVV0ThYi7Ur0KBeGPXjeCDzTGXVsYA6Th8Rtd5d72NmT-5UWBTAiqtN-kzQUno8',
  'https://lh3.googleusercontent.com/pw/AP1GczO0NGS2gLTT88ZvNvuOX-KH8gaLZZBYjW9XUFICz2FKLVGAgMKQkWuGwdtv9trB56gtZDFIvpUtMBejLoiTig5X73oh8XlxIcketXnUDwJfoz41N_x3',
  'https://lh3.googleusercontent.com/pw/AP1GczO0SqUUhy9yrXy-MFsjXDKDQB7g8fWLUyV29Ste02yirR1yGDc3fG4DwpdAYPL5ZcoLJIB1ncD-ZhggQHiPGLlmDdxwC8KFdQgrUDUQit4wmCE64neZ',
  'https://lh3.googleusercontent.com/pw/AP1GczO484MAsA9KAivNQgBEndTTdoLO7YLohU5BI1RoQIra2oJ0hDxS9A1oZePgkPZxaupv6tH97aqgvUNe0DCqO-hpgfUQhslREwNpVC9gUZwH342RIixh',
  'https://lh3.googleusercontent.com/pw/AP1GczO4FAbZPiMrKl66SERvDL6fgXq1OhLmcuxBFhSshvAb3rACDRa44Fwjt962qgznhnktb-qqeih7j4c8UYuax641JqvImxIXwnAJqfOP8qU-RVV_74H6',
  'https://lh3.googleusercontent.com/pw/AP1GczO6QUBuANsVwx-pVB18rEkkbV7dIMwpl09XvnBJbitfgd_em1Y3dEbIBN79nP5tX836_UCTTDf3zeCLAco2HBJmqxJ5g3O1fxX3UkGbynSSKXoBm62',
  'https://lh3.googleusercontent.com/pw/AP1GczO6Z54hVKKV2PXBxRMD6xUJdmDjC1ZwgINYmnMJbJ_EEEs0Lx6eu-sD-h2lxmgIrkscKb22-6CgSCyOQgNBcYtOGOkgYUwFDiEmcu0Hc4q3SwjexKjM',
  'https://lh3.googleusercontent.com/pw/AP1GczO75qDxCAWqHXnlIrVr9wr1Ksyvfm6gprpZx3YJWxCv3uLEz7slkdEZ-lVEvH57kIelRGmMXHwBHwxA8F4InoVsjQxZCodyh4htDaQ9Q4TEoSvW5XLV',
  'https://lh3.googleusercontent.com/pw/AP1GczO98QUCBiewdSmvDZqbHPPMnsaiJCDqpdt5eHBhCL24E14u2nreLpy_-rhqqslhX1df2iGif78nJbW1ZJsmJau_psaRWL5cGL_uVlf8lHNRZ2Qqjafd',
  'https://lh3.googleusercontent.com/pw/AP1GczOagJ7s-acjdoGCZR94oBivHKgFpHw2RDvw-m11lVKe8enf6SfV2pcgF1mOlRQFMqBtxC2aRSdajKXwJrVe8WuHoBw_PlOmghDvff5fwtCw5lZD1yIp',
  'https://lh3.googleusercontent.com/pw/AP1GczOD__5LMBqAgwy5ajIVTuBbMxiV0BE5StblfbimIlA-7cy02MlAOJMuI_5BSBv1KfYLvIILoG9gef000leNzFMHWw5nHnkH4pHdVk6ZdxIrY6ou1EKN',
  'https://lh3.googleusercontent.com/pw/AP1GczOfe0IMJ0N3EPI79kx-oRaRnCO4CMDbOHol4RDZCttk998T9aKQVa4qSc2BeLtIkWhABRRK5A_UMrs5dYOglgEZ2XTEn0cObO86zUczfxFMrwSdX6FX',
  'https://lh3.googleusercontent.com/pw/AP1GczOggzUjN32cTC-gZun3DqtC1oGK-c5KuorD_CL0ZumEBtDJVIw7_6gI7wERgjQAZ6ApsxkjS4JRWVKS7bMvqSFY6CT1bI2_P6kvHgKksk8dAPhzvMYA',
  'https://lh3.googleusercontent.com/pw/AP1GczOLt3YKHOO4izJ3OxYq_clbDyPT2fr5yZOPdvmt-WZ2TyPD6WTmULmrUWtRumuclOenS3N3iWgwnTZS8ygFkTOz0pb18Pv3_XYXwOhSqIecE3CII9wO',
  'https://lh3.googleusercontent.com/pw/AP1GczOoJVM4IWwxf8DGn1uFWv4tD5tcY8usDRS-2mGrvao4HIBsLZ47eXhtIws7meT-XcPcnYITsK5a5TgfO6X89dOQ38Yt_iRC6NvFD0RdYQ641NqlsQay',
  'https://lh3.googleusercontent.com/pw/AP1GczORneDjcseHdYbneXiaudTKgKLh4eQFodw75HT0BonMNvvJKSNStsPYqLlrESNhPZUOLCh5sPwED9LLIfVWOc-3OXcYQMo1B44zaBjBC0AoI59FFknz',
  'https://lh3.googleusercontent.com/pw/AP1GczOTnBkzK8yPpq-9xicRol-r8xBW6LKkulWqXcgPHoxCkjh-IstET1Ogr9J_-vRdXbN3RjakXak56BNqvmVHhZlDdG5gR0M7ypHwyPobfPAyfCAHc_qV',
  'https://lh3.googleusercontent.com/pw/AP1GczOu4QOzl7h2_c5_I-ufJwxR0UzvosK_iFRjG8WB6hpOq6KZzwCVwNjJ0mMSi-DODf-G11mxBaPMrX2jiEjfPfqd_-ZisqxeWaEPS0X72SaNAAMixzsN',
  'https://lh3.googleusercontent.com/pw/AP1GczOu6BvdgnFGzWXpmFbL4Psx8K35SrbmjHNtFpBVO2HT8fjr8xptsdQxcc6gZ7dAenWOeXLT47F8Gd1-xnUisaDCnhAwiYh6c7trhNH3QlpPGxfBhulv',
  'https://lh3.googleusercontent.com/pw/AP1GczOv_YqGxt4wxT1a0EM0-_ykwdRxdcWNIunljIlYRGPE55syaLol28HYChqoy3DvZ_zAQFzHU3FFEAzbfxhcDiIXAbvlLr6NOebHVTMDz9vc_xZSxUxg',
  'https://lh3.googleusercontent.com/pw/AP1GczOV1HSY8GD49EAA758ZlfrmwD1sqbdbavjaXJO5b1fdmUTubuZ18Okstr2OqAe9Ds-ZixhHnmDGmwWEo6du7NA9ln-4AqRRcIeAwykjHLYY4pHftZJq',
  'https://lh3.googleusercontent.com/pw/AP1GczOVHg3XrBBcRX3KL-SjfKY3smPaSNus_wRLir0clg1WkDmoLOFJWwyJpLYQbI8cSosm0YAX6cmyIVRELzloRpQxp2KiuUY5aVglClWFEdyNc-GtHUiG',
  'https://lh3.googleusercontent.com/pw/AP1GczOvSIlHy2-rXeHlV3dcIHEv14--XFwIfnQ2lQJqpxnzSpFkAlppvAj_uFLJZZjEpO_kM-ILwOcJYcjFjvwpOEyroM1TQg6XPUMrzb-l2sNRMooyHndg',
  'https://lh3.googleusercontent.com/pw/AP1GczOwSJ-Tj5QxZSsA0c89oh6_1vPwWbxtkYaN13Y_GAmWPOSFYlcVYK14NAuAyxZbmhxTi-dgbXf3lt63UQFxpCmYeZ_vrLXHBQu84fIjpNZloX6Cvkch',
  'https://lh3.googleusercontent.com/pw/AP1GczOwy4Pyh9yqAXuUXc7a7ReyYYjy9XY9FNp4frEJoj9-JHc_BU3XyrcuugYDp2y3rXQdA_n_ea_gT25Z-oXvJNoVMlKuJ1HkFwb2Vz8xISke97_fwEzo',
  'https://lh3.googleusercontent.com/pw/AP1GczOy0v303K3YG82N0OjB4psksfre5HJfZydN9ycMsoMHVC8M1VpmZk1Xt-F7aW0qNNCpRcVzVeU4aqcP_xcpBbdidxuYyj_YemttjtOxmlm-p8Grjk6W',
  'https://lh3.googleusercontent.com/pw/AP1GczOyOko6vLDAgnQLJ93hzrdJzMkbKEFQV_v_V3xkAV1wGSWYRGk1lpHaB8hoxEdMv32ZFNMihpABAdJHtiCkSQb8y7wUKWhDUrcbTcv6Pf2QPNJlUrpr',
  'https://lh3.googleusercontent.com/pw/AP1GczOyWTiRd_ePIvwYFZVbwEFsZhPI8_ta0F3yyHxyEwmTgJsjTigSa_NivwSxPCIl3QDW4VT11P0z3LX_gRK5LAGwKgW2-F0QIMr7SRRVNxiVLgSwaYSe',
  'https://lh3.googleusercontent.com/pw/AP1GczOzkFstvAKJONDWGT4MrGZfmJiPG6L6RUkjPYWBlG9gV4L32rwl0JrT8vSnLOAWrrv6eP5MHbX8ckgRdy2yGOBlU7HmVxDeWxWKm3dhfFaKapUpZ70s',
  'https://lh3.googleusercontent.com/pw/AP1GczP_Rxnrp7thQ4a0CSwCyQ81DT0FRZnL1Qwgqp6WkGNvOpFPdl8aQgydm199r03nBAvRYqzUeYZAyq5NwAlsKarSu5_SsxIzm0XQb7AoNalwC9omO6RW',
  'https://lh3.googleusercontent.com/pw/AP1GczP0pOXhaDOSpzUqUW09weiHRUHdJ1Kbuc9FL2tj55_4HRxwsV7-ETIDPuDn5jq3mAo6pwIaasZ9nW4wZcbwM2dK7L1874Hho4i5Uad_IQWcHSSlwWtP',
  'https://lh3.googleusercontent.com/pw/AP1GczP1g41wQCSEJTHqPZqNIN19VTZX13TxvboFqeUG31O000qz5bgWYygpbMlTP6qAMyrbGNho3i9Glvaa6Bw_XJzp25YoA1rr9dRomYz3xORF3G_Pm9y1',
  'https://lh3.googleusercontent.com/pw/AP1GczP31WutWN2weQtwlOoi9c3safP7RHa3Zbhg9TUeoRMsGxgZmAbUoRNjba8jjvlmPP4KDXf2ECDx4tYp2IHQTgB9k2Sa7tBM6Qd9hDigSP5MxkXgJX2_',
  'https://lh3.googleusercontent.com/pw/AP1GczP9R30ygpaJhstkeXA9fVO5lsZncBxT9ZhNKFJumvXzl5FGg9W6gqhL8nE8QHYtQUCiPNDG0X4aR_cav9ilGJMhpsmkte4nnvaBIbJyu9mQVkwOTL5K',
  'https://lh3.googleusercontent.com/pw/AP1GczPA7Qs8BbO1wm2oL2PNbiE1nJQMk_eWI5cnErJcyeIAuN1a_1iLHVfMWrRioNIua11JzVRnPLTQpBrnjXxok5XtJEltM3DqBcakn9bS1aFrNUO2EVFM',
  'https://lh3.googleusercontent.com/pw/AP1GczPaallGQfY0VreahNqKnzlhfHF2XI0ERiDQ73hn6kfq55mOLaFtzmgFeFABv-RXfaZpVp5041b5BSAUU6YTLKcEnwYMaixEyDsRuL8CDvl_rbFsnGpb',
  'https://lh3.googleusercontent.com/pw/AP1GczPagKI_dMZ_RdS-xfbau3wMuhFwc8SaV0qNHATglVz3maqlkhPB7rMSw7rZeGznbaaoTLfkDI5Xjc2B_ZldUR-C7znpSxu22INTpuwPj0u2JtMfnto0',
  'https://lh3.googleusercontent.com/pw/AP1GczPcRT__SuEUbASTbjb9eePiONM8cmCrKrKAFTVezVy3aavD-Meo2oYOqBFMVI2ioKcpzXHJAWBi4m6Cv0X87lLJn9jcAQapbyRPKGf-rmvnStv0Re9p',
  'https://lh3.googleusercontent.com/pw/AP1GczPD3OmyFBlb5jufRTNXQm2o5L3tYAGlWrH14dHA113moO3N6BCdoMsKAvp2MYDE7fuo1K9JDOz2SrJW84yd3j0UfnOWN_B3Qu54TmNg4HX-PYox0nfh',
  'https://lh3.googleusercontent.com/pw/AP1GczPEIR-zSCC6zBjk9NiAKg3xmvJ4aMptLgxP9NRioDSSwem3DSLlIxmyDl7JDH3bejMaQj9FeIw1HzkU359axWjD96KUDro-E44q1ylfXHsvvPDnEMC4',
  'https://lh3.googleusercontent.com/pw/AP1GczPEQwxRupkAgRgnMRmLAcQT4n1NWLt1Q-Kd0ZshQsCEf_0Ot2Ne0HgBOuUzylbFKFgAaxfVxE53Ogb22OhmaS48431APf2L51wciBsK6fzCxOZKNH7u',
  'https://lh3.googleusercontent.com/pw/AP1GczPfU_7VQfpOQ8XhYBc7eP3eHTsPS4FWEh8zhyIWeSNCFDp6lZfqGN2NOTqk9h-FbxGYmC0S8dzyUwozB20qt24js24kEnus_iRqqoijxN6OfnBim2aT',
  'https://lh3.googleusercontent.com/pw/AP1GczPG45wCl2zeg2drLBrRplehCoCbUavLQ6z9UmJT0GSSmQsP2VlZK9vSPK6DYsqIRJPTuWSRoGpmMxp9ZzYOKWx2-rK84XG3ISp7OUkmly6fN3OsspdJ',
  'https://lh3.googleusercontent.com/pw/AP1GczPgRbRVf0h_N1P25mwDsiWqLKo7FKQCoV0c09tshj81No63g6_kuwof7HIy7HPz-UIbIak4tGzVp8C65nFlulrPo9Am8InMvCHJFVHgVXyiLMGkVtvW',
  'https://lh3.googleusercontent.com/pw/AP1GczPHRbYYBvH5GYm81fnZaHGtwV3bJLlW1eWtLnqUbPk39bnQRJ2KGNovA1S0XOnktHLCSzTOuYYQwBdnXTFSKrW9TJ1nmgispV3cMdku3mPKZ7wtG3SZ',
  'https://lh3.googleusercontent.com/pw/AP1GczPixZDeT7k-WErtC1gSwL6Dy9Q2KlSEj_YOLS_tmO52vzMHJWDfvCL8wnlscBn8vlkxqb183q3DAPqnQe71uVlfr-_xBHmUDlNjwixaI2xVGtI_m3vR',
  'https://lh3.googleusercontent.com/pw/AP1GczPjayvn8PsoffUtKhbSssnoGFAtAXZNyzKN9e4vxN1i6BPKHnf2WDzX58Pc-7abWBKWiJtVz20U9q-LjFfgTR-64LOO31rm-fVBp7IL3qdYlQ_nXVc5',
  'https://lh3.googleusercontent.com/pw/AP1GczPk2JmjdqTRu2rJ8qyGamYpDVPsGEqX0eNaaFbBhV-mLeh7pj0CdzG2ti7bE-VbrCzGXcg-_GT3JoQsvfxbnenKhM7ZE7YNV9PjKHza2brqZAdkQnvB',
  'https://lh3.googleusercontent.com/pw/AP1GczPl3W6IXwg9Vu9BJrncT56PqpBejuEDel20upymcSZsya8z1Dy_vunz2AfUSY1FS6zl9j1tnhbMrTPRtn8rw1TKsD2oBw98088ZBfGiDwvXrgtmmlsA',
  'https://lh3.googleusercontent.com/pw/AP1GczPLCDVphnzNGJrVtXSDVCUkOpWTU-RihiwIPlBw_Jh04lVhDUmGWnT1dLSJ60OzCzqPWbOft32xYIvpZx7OuVdDnC6yGitJJ5eOVQ9G4NeZXRX3vWFP',
  'https://lh3.googleusercontent.com/pw/AP1GczPn0k7HZeCwYkToFRyKehmSfmKt6q42VGl0hU2aV-pJJ8oUKrCHAlZwal0xmm76BZLuC5AAwcnFsXDaheoWyQoUSOPJsC1qHB4-080ZXf5Z30mHkOeQ',
  'https://lh3.googleusercontent.com/pw/AP1GczPn4ys-VFfQ7a3vU9pohMuLQWiO2nk2qriv94p_z1oC_U3u0GzGuGDX846NRwBX-RrTSjOvzSOgm0zsl65Z_zmZ5fDNcpk6oJ8CUQZJe1AdKBUn1IB_',
  'https://lh3.googleusercontent.com/pw/AP1GczPNjFvhb9f067zyAVOsfHktHKEqqFlHQiZo69Rkbf5k8YveKxZD8u6CR4WOfFiqQh2rEf12WGFIzIi8XS6nERBti9fpaqtG1UnJ22TjV4KxxB4Kk70h',
  'https://lh3.googleusercontent.com/pw/AP1GczPoififevSewM8-p5EZp0RcP5YQcuwSO-0qN3oVrZV_E6QRW0PuLeXGMzlgckfTiKUG4zTygEJLmnPM8ud4fGFYzL_NM6esDF_39U5miBDXcRa88Lrx',
  'https://lh3.googleusercontent.com/pw/AP1GczPPp6zxeBYCU7LojX9-HStVcLmowClQGUS1aa1d7tr4NskelcGR4uCSCYmo8-AVdN3KoyH4f7f39qE-f_n1GS92nfGyTodWnr70oFCCf8iuyQpNcpKL',
  'https://lh3.googleusercontent.com/pw/AP1GczPpQVKx1xi7Z-dPhb1TK64unBfMSbpTzmam2WkgpRbXhlls_uUduxFO4bAVeKxaP_qfIF6Uv6pKK04RdBjcc2mV9MNV7HxmIOwsRYPsUGUuL9Xe9GO1',
  'https://lh3.googleusercontent.com/pw/AP1GczPQ2abKdVxmxyspnjbpqvwBxf9dWvM6I4MZ5E8-IbsQ9IzbuQZTbpnmmxcPuRDRfwbd40a9MiMrYJxiFOcqXLCDoQTPiNyYAHmC28Qfh8_TsmmnB7rv',
  'https://lh3.googleusercontent.com/pw/AP1GczPU_HELsZvyGYBclywZGwxIw452QAVUukDELxWBHdCkP0chBx43gQcbILFXpLM-mraRcGBQVwGvhhC0NYDO1RdyUXTYjhJPHfQ8Fil8OkF7XiHA8yQA',
  'https://lh3.googleusercontent.com/pw/AP1GczPU_Q7K6DZUlKh2xL_TaSBgF53d1z_P8a3HVj-Jt9vlT8-X0vwo3f-04St_q77gRLQo7RwmrKY8uhI-i0K44NGeOvl0NoubpZSHcHK7BSlurFZEST2d',
  'https://lh3.googleusercontent.com/pw/AP1GczPV8XEwrXZd5r6MFTepvD5K14iGAwPcyVLCVKAoIvqaUvQfLw3Am4okGT97JmDLqFi0Nqqr8akjSsmaJrc4-dwZL_NVpqmp1j4jJ0UpmgdGL21qGENa',
  'https://lh3.googleusercontent.com/pw/AP1GczPVdmA9OP0tRYyll8Pj4Z0y3adTmddCtCZnNPNThXcEc9tQ9Z6EQMa3yd-F5Tc5i_uGgrfjm_KfAPsBqUBg5-XRmw_UIU6O6s25ahIl_f7BiabOes_z',
  'https://lh3.googleusercontent.com/pw/AP1GczPwnggqaTlxUuXGb_J-WmQsSymPkuvPHZwHQ17dhVTeN-DVTWtHV49NsPaE3Gwc4AvJ4h1ENoXlQwnUKETpU7Qml0Sf8YLbXi6lH04DJBW4swVto5H-',
  'https://lh3.googleusercontent.com/pw/AP1GczPXi9f5oPLXYGEoPw2mE2eaD_h3IoAFv-u25TPlkNNHPGjOEKl_oQlbPSG3z6wsLdXhFQdQyNFZ4McPkFtFndlmF2jWZFcYeD9CsMCWQl6c3wrs4uu1',
  'https://lh3.googleusercontent.com/pw/AP1GczPXvoNowBssASs1r4zXGOkHCN0K-WON5Kh8dZfTlwksKwEZFivHcIj0esZbroKcL4arX4ikfHs1b9yBD2LIv4PqA0MiyzJ9yxCTElDoJfTuMaFhA6Y_',
]

const outDir = path.join(__dirname, '..', 'public', 'images', 'gallery')

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest)
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      if (res.statusCode === 302 || res.statusCode === 301) {
        file.close()
        fs.unlinkSync(dest)
        return download(res.headers.location, dest).then(resolve).catch(reject)
      }
      res.pipe(file)
      file.on('finish', () => file.close(resolve))
    }).on('error', err => {
      fs.unlinkSync(dest)
      reject(err)
    })
  })
}

const CONCURRENCY = 8
let index = 0
let done = 0

async function worker() {
  while (index < PHOTO_BASES.length) {
    const i = index++
    const base = PHOTO_BASES[i]
    const url = `${base}=w1920-h1280`
    const dest = path.join(outDir, `safari-${String(i + 1).padStart(3, '0')}.jpg`)
    if (fs.existsSync(dest) && fs.statSync(dest).size > 10000) {
      done++
      process.stdout.write(`\r${done}/${PHOTO_BASES.length} done`)
      continue
    }
    try {
      await download(url, dest)
      done++
      process.stdout.write(`\r${done}/${PHOTO_BASES.length} done`)
    } catch (e) {
      console.error(`\nFailed ${i + 1}: ${e.message}`)
    }
  }
}

console.log(`Downloading ${PHOTO_BASES.length} photos...`)
await Promise.all(Array.from({ length: CONCURRENCY }, worker))
console.log('\nAll done!')
