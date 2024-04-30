class player:
    position=0

def rolldice():
    import random
    li=[1,2,3,4,5,6]
    return random.choice(li)

def getposition(position):
    # 0 means snake and 1 means ladder 
    obstacles=[[5,20,1],[84,10,1],[17,10,0],[4,20,1],[6,10,1],[99,30,0]]
    for i in range(len(obstacles)):
        if position==obstacles[i][0]:
            if obstacles[i][2]==0:
                print("position was >> ",position)
                position-=obstacles[i][1]
                print("stuck to a snake",obstacles[i][1])
            else:
                print("position was >> ",position)
                position+=obstacles[i][1]
                print("stuck to a ladder",obstacles[i][1])
    return position

player1=player()
player1.position=0
while(player1.position!=100):
    if player1.position<=100:
        print("---------------------------")
        rolethedice=int(input("ENTER 1 IF YOU WANT TO PLAY"))
        # rolethedice=1
        if rolethedice==1:
            num=rolldice()
            print("dice faced >> ",num)
            if player1.position+num<=100:
                player1.position+=num
                player1.position=getposition(player1.position)
            else:
                pass
        else:
            break
        print("current position",player1.position)
    else:
        print("player1 won ")
        break