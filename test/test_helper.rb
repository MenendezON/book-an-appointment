ENV['RAILS_ENV'] ||= 'test'
require_relative '../config/environment'
require 'rails/test_help'

module ActiveSupport
  class TestCase
    # Run tests in parallel with specified workers
    parallelize(workers: :number_of_processors)

    # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
    fixtures :all

    # Replace the deprecated TestFixtures.fixture_path= with fixture_paths=
    ActiveSupport::TestFixtures.fixture_paths = [Rails.root.join('test', 'fixtures')]

    # Add more helper methods to be used by all tests here...
  end
end
