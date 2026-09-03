import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
const sans=Geist({variable:'--sans',subsets:['latin']}); const mono=Geist_Mono({variable:'--mono',subsets:['latin']});
export const metadata:Metadata={title:'Jasper | 好奇心长期在线',description:'Jasper 的个人网站，记录技术、旅行、跳舞和最近觉得不错的东西。'};
export const dynamic = 'force-static';
export default function Layout({children}:{children:React.ReactNode}){return <html lang="zh-CN"><body className={`${sans.variable} ${mono.variable}`}>{children}</body></html>}
