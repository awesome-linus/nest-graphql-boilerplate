import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { Resolver, Query } from '@nestjs/graphql';
import { RecipesModule } from './recipes/recipes.module';

@Resolver()
export class FooResolver {
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }
}

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: true,
      autoSchemaFile: 'schema.graphql',
    }),
    RecipesModule,
  ],
  controllers: [AppController],
  providers: [AppService, FooResolver],
})
export class AppModule {}
