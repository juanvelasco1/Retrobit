import {createClient} from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'


const supabaseUrl = 'https://fvsyfgvqrbdsbobfnivg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2c3lmZ3ZxcmJkc2JvYmZuaXZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAxMTk2MDQsImV4cCI6MjA0NTY5NTYwNH0.wc-KqXPzm-wcwqWJluUuvzYo7HEIjfC2FyCwHC0jzBQ'
const supabaseClient = createClient(supabaseUrl, supabaseKey)


export async function  createUser(userData) {
   
   return await supabaseClient
  .from('users')
  .insert({ name: userData.nickname, email: userData.email })

}

export async function  getQuestion(questionNumber) {
   
  return  await supabaseClient
  .from('Trivia')
  .select('*')
  .eq('id', questionNumber)

}

export async function  getAnswer(questionNumber) {
   
  return  await supabaseClient
  .from('Trivia')
  .select('*')
  .eq('id', questionNumber)

}