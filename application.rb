require 'sinatra'
require 'sinatra/activerecord'
Dir.glob("lib/**/*").each do |file|
  next if File.directory?(file)
  require "./#{file}"
end
