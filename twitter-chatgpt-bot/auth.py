
def read_env_file():
    result = {}
    with open('.env', 'r', encoding='UTF-8') as f:
        lines = f.readlines()
        for line in lines:
            splitted = line.split('=')
            result[splitted[0]] = splitted[1].rstrip('\n')
    return result

auth_info = read_env_file()

