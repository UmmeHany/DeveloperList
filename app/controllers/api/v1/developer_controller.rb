#developer_controller.rb
class Api::V1::DeveloperController < Api::V1::BaseController

  def index

    lang = 'ruby'
    sin = 'weekly'
    response = HTTParty.get("https://ghapi.huchen.dev/developers",query:{ "language" => lang ,"since" => sin })
    respond_with response.body
    
  end

end
