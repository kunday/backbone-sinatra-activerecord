class Application  < Sinatra::Application
  get '/*' do
    send_file File.join(settings.public_folder, 'index.html')
  end
end
