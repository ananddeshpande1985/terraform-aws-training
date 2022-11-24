import os
a =list()
base_path = "/Users/Deshpande/Documents/Terraform"
def get_list(obj_path, base1_path):
    list_d = os.listdir (obj_path)
    for obj_name in list_d:
        if os.path.isdir(obj_name):
            obj_path = base1_path + "/"+ obj_name
            print("{} is a dir".format(obj_path))
            # a.append(obj_path)
            get_list(obj_path,obj_path)
            


a1 = get_list(base_path,base_path)
print(a1)